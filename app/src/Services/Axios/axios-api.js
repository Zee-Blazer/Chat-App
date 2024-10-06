import axios from 'axios';

export default axios.create({
    // baseURL: "http://localhost:3004/"
    // baseURL: "https://cee2-197-210-52-68.ngrok-free.app"
    // baseURL: "https://chatapp-backend-api.onrender.com/"
    baseURL: "http://10.0.2.2:3004/"
})

// export const uriLink = "http://10.0.2.2:3004/"
// export const picUriLink = "http://10.0.2.2:3004/profile/pic"

export const uriLink = "http://localhost:3004/"
export const picUriLink = "http://localhost/profile/pic"

// export const uriLink = "https://cee2-197-210-52-68.ngrok-free.app"
// export const picUriLink = "https://cee2-197-210-52-68.ngrok-free.app"

// export const uriLink = "https://chatapp-backend-api.onrender.com/"
// export const picUriLink = "https://chatapp-backend-api.onrender.com/"
