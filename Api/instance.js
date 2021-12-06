import axios from "axios";
const instance = axios.create({
    baseURL: "https://tvrj97vxf0.execute-api.us-east-1.amazonaws.com",
    // timeout: 1000,
    // headers: {}
});


export { instance }