import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:3004/"
    // baseURL: "https://7c78-197-210-52-46.ngrok-free.app"
    // baseURL: "http://10.0.2.2:3004/"
})

// export const uriLink = "http://10.0.2.2:3004/"
// export const picUriLink = "http://10.0.2.2:3004/profile/pic"

export const uriLink = "http://localhost:3004/"
export const picUriLink = "http://localhost/profile/pic"

// export const uriLink = "https://7c78-197-210-52-46.ngrok-free.app"
// export const picUriLink = "https://7c78-197-210-52-46.ngrok-free.app"
