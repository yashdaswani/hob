import axios from "axios";
import {  API_BASE_URL} from "../config/config";


// /axios global settings

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
// axios.defaults.headers.common['X-Shopify-Access-Token']=token


export const AxiosInstance = axios.create({

  baseURL: API_BASE_URL
  
  

});