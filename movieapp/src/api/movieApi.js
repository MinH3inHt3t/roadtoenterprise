import api from "./api";
const apiKey = "8dce2d0e8ee73b60b19e33251daa2b6f"
const imageUrl = "https://image.tmdb.org/t/p/w300";
const URLS = {
  getMovie: "discover/movie",
  getMovieDetail: "movie/",
};

export const fetchImage = (imagePath) => {
  console.log("poster path" + imagePath)
  // return api.get(imagePath, {
  //   baseURL: imageUrl,
  // });

  return imageUrl + imagePath;
};

export const fetchMovie = () => {
  return api.get(URLS.getMovie, {
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: apiKey
    }
  });
};

export const fetchMovieDetail = (movieId) => {
  return api.get(URLS.getMovieDetail + movieId, {
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: apiKey
    }
  });
};



