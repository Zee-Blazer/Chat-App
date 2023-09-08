import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:3004/"
    // baseURL: "https://5909-197-210-53-142.ngrok-free.app"
    // baseURL: "http://10.0.2.2:3004/"
})

// export const uriLink = "http://10.0.2.2:3004/"
// export const picUriLink = "http://10.0.2.2:3004/profile/pic"

export const uriLink = "http://localhost:3004/"
export const picUriLink = "http://localhost/profile/pic"

// export const uriLink = "https://5909-197-210-53-142.ngrok-free.app"
// export const picUriLink = "https://5909-197-210-53-142.ngrok-free.app"
