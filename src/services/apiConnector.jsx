import axios from "axios";

// Create a base instance of axios
export const axiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// Function to make API requests
export const apiConnector = (method, url, bodyData, headers, params) => {
  console.log('url-------------------------------->', url);
  return axiosInstance({
    method: method,
    url: url,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null
  });
};
