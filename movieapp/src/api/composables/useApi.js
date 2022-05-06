import { ref, computed } from "vue";
import { upperFirst } from "lodash-es";
import { apiStatus } from "../constants/apiStatus";
const { IDLE, SUCCESS, PENDING, ERROR } = apiStatus;
/**
 * Create an object of computed statuses
 *
 * @param {Symbol} status
 * @param {String} apiName*/
const createNormalisedApiStatuses = (status, apiName) => {
  let normalisedApiStatuses = {};
  for (const [statusKey, statusValue] of Object.entries(apiStatus)) {
    let propertyName = "";
    // Create a property name for each computed status
    if (apiName) {
      propertyName = `${apiName}Status${upperFirst(statusKey.toLowerCase())}`;
    } else {
      propertyName = `status${statusKey.toLowerCase()}`;
    }
    // Create a computed that returns true/false based on
    // the currently selected status
    normalisedApiStatuses[propertyName] = computed(
      () => statusValue === status.value
    );
  }

  return normalisedApiStatuses;
};
/**
 * @param {string} apiName
 * @param {function} fn
 * @param {object} config
 */
export const useApi = (apiName, fn, responseAdapter = "") => {
  // console.log("priint response adat " + responseAdapter);
  // Reactive values to store data and API status
  const data = ref({});
  const status = ref(IDLE);
  const error = ref(null);
  /**
   * Initialise the api request
   */
  const exec = async (...args) => {
    try {
      // Clear current error value
      error.value = null;
      // API request starts
      status.value = PENDING;
      const response = await fn(...args);
      // console.log("response   " + response)
      // Before assigning the response, check if a responseAdapter
      // was passed, if yes, then use it
      data.value =
        typeof responseAdapter === "function"
          ? responseAdapter(response)
          : response.data; // Done!
      status.value = SUCCESS;

      // console.log(JSON.stringify(response) + "from setup");
    } catch (error) {
      // Oops, there was an error
      error.value = error;
      status.value = ERROR;
    }
  };
  return {
    data,
    status,
    error,
    exec,
    ...createNormalisedApiStatuses(status, apiName),
  };
};
