import api from "./api";
const URLS = {
  fetchDogUrl: "breeds/image/random",
  fetchKittyUrl: "cat?json=true",
};
export const fetchDog = () => {
  return api.get(URLS.fetchDogUrl, {
    baseURL: "https://dog.ceo/api/",
  });
};
export const fetchKitty = () => {
  return api.get(URLS.fetchKittyUrl, {
    baseURL: "https://cataas.com/",
  });
};
