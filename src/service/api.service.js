import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const RAPI_API_KEY = process.env.REACT_APP_PUBLIC_KEY;

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": RAPI_API_KEY.toString(),
    // "X-RapidAPI-Key": "d2c82a52f5msh130b5ac8de7ecf4p162d34jsn30c944413ced",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
};
