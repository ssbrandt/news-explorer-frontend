const baseURL = "https://newsapi.org/v2/";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const getNews = () => {
  return fetch(
    baseURL +
      "/everything?" +
      "q=boats&" +
      "from=2024-04-01?" +
      "to=2024-04-07?" +
      "pageSize=100"
  ).then((res) => checkResponse(res));
};

export { getNews };
