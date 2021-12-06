import {get_request,} from "./Requests";

const TestApi = async () => {
    const Test = await get_request({ target: '/dev/getform'});
    return Test
}

export {TestApi}