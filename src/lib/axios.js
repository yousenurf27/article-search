import axios from "axios";

export const axiosNews = axios.create({
  baseURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json"
})
