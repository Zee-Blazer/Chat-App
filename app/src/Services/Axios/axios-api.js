import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:3004/"
    // baseURL: "https://fbaa-102-91-49-98.ngrok-free.app"
    // baseURL: "http://10.0.2.2:3004/"
})

// export const uriLink = "http://10.0.2.2:3004/"
// export const picUriLink = "http://10.0.2.2:3004/profile/pic"

export const uriLink = "http://localhost:3004/"
export const picUriLink = "http://localhost/profile/pic"

// export const uriLink = "https://fbaa-102-91-49-98.ngrok-free.app"
// export const picUriLink = "https://fbaa-102-91-49-98.ngrok-free.app"
