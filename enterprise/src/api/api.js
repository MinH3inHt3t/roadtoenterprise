import axios from "axios";
export const getCancelSource = () => axios.CancelToken.source();
// ...other functions
export const didAbort = (error) => axios.isCancel(error);

// Default config for the axios instance
const axiosParams = {
  // Set different base URL based on the environment
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:8080" : "/",
  // Alternative if you have more environments
  // baseURL: process.env.VUE_APP_API_BASE_URL
};
// Create axios instance with default params
const axiosInstance = axios.create(axiosParams);
// Main api function
const api = (axios) => {
  // Wrapper functions around axios
  const withAbort =
    (fn) =>
    async (...args) => {
      const originalConfig = args[args.length - 1];

      // Extract abort property from the config
      let { abort, ...config } = originalConfig;
      // Create cancel token and abort method only if abort
      // function was passed
      if (typeof abort === "function") {
        const { cancel, token } = getCancelSource();
        config.cancelToken = token;
        abort(cancel);
      }
      try {
        // Spread all arguments from args besides the original config,
        // and pass the rest of the config without abort property
        return await fn(...args.slice(0, args.length - 1), config);
      } catch (error) {
        // Add "aborted" property to the error if the request was cancelled
        didAbort(error) && (error.aborted = true);
        throw error;
      }
    };

  const withLogger = async (promise) =>
    promise.catch((error) => {
      /*
      Always log errors in dev environment
      if (process.env.NODE_ENV !== 'development') throw error
      */
      // Log error only if VUE_APP_DEBUG_API env is set to true
      if (!process.env.VUE_APP_DEBUG_API) throw error;
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest
        // in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
      throw error;
    });
  return {
    get: (url, config = {}) => withLogger(withAbort(axios.get)(url, config)),
    post: (url, body, config = {}) =>
      withLogger(withAbort(axios.post)(url, body, config)),
    patch: (url, body, config = {}) =>
      withLogger(withAbort(axios.patch)(url, body, config)),
    delete: (url, config = {}) =>
      withLogger(withAbort(axios.delete)(url, config)),
  };
};

export const abortable = (fn) => {
  // Create cancel token and cancel method
  const { cancel, token } = getCancelSource();
  // Return the cancel method and the wrapped function with a cancel token
  return {
    abort: cancel,
    fn: (...args) => {
      console.log(args);
      // If the last argument is not an object then throw
      if (typeof args[args.length - 1] !== "object") {
        throw new Error("The last argument must be a config object!");
      }
      // Add the cancel token to the last argument passed
      // The last argument passed should always be a config object
      args[args.length - 1] = {
        ...args[args.length - 1],
        cancelToken: token,
      };
      return fn(...args);
    },
  };
};

// Initialise the api function and pass axiosInstance to it
export default api(axiosInstance);
