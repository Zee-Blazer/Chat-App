import axios from 'axios';

export default axios.create({
    baseURL: "http://10.0.2.2:3004/"
})

export const uriLink = "http://10.0.2.2:3004/"
export const picUriLink = "http://10.0.2.2:3004/profile/pic"
