
import axios from "axios";
const post_request = async ({ target, body }) => {
    try {
        const instance = axios.create({baseURL: 'https://tvrj97vxf0.execute-api.us-east-1.amazonaws.com/'});
        const response = await instance.post(target, body)
        console.log("post response", response.data);
        return response
    } catch (error) {
        console.log("post error", error);
        return "Error"
    }
}
const get_request = async (target) => {
    try {
        const instance = axios.create({baseURL: 'https://tvrj97vxf0.execute-api.us-east-1.amazonaws.com/'});
        const response = await instance.get(target)
        console.log("get response", response.data);
        const res = response
        return res
    } catch (error) {
        console.log("get error", error);
        return "Error"
    }
}
export { post_request, get_request }