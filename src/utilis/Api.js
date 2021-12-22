import axios from "axios";

const Api = axios.create({
    //   baseURL: "http://localhost:2000/",
    baseURL: "https://www.breakingbadapi.com/api/"
});

export default Api;