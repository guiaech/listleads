
import axios from "axios";

const api = axios.create({
    baseURL: 'https://lqbi4t23pj.execute-api.us-west-2.amazonaws.com/'
});

export default api;