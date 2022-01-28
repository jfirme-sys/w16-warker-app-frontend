import axios from 'axios'

export const axiosHttpClient = axios.create({
  baseURL: 'https://warker-api.herokuapp.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }
})