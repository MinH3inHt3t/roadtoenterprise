import api from "./api";
import { requiredParam } from "@/helpers/requiredParam";
const URLS = {
  getMeal: "search.php",
};
export const searchMeals = (query, config = requiredParam("")) => {
  return api.get(URLS.getMeal, {
    baseURL: "https://www.themealdb.com/api/json/v1/1/",
    ...config,
    params: {
      s: query,
    },
  });
};
