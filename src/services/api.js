import axios from "axios";

export const api = axios.create({
    baseURL: 'https://notesweb-api.herokuapp.com'
});