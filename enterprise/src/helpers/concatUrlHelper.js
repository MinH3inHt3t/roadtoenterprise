export const concatUrl = (response) => {
  console.log("conacturl " + response);
  return "https://cataas.com" + response.data.url;
};
