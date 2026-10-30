import axios from 'axios'

const api = axios.create({
    // Backend URL comes from client/.env (VITE_API_URL), defaults to the local backend
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    timeout: 1000000
})

api.interceptors.request.use(function(config){
    const token = localStorage.getItem('token')
    if(token){
        config.headers['x-auth-token'] = token
    }
    return config
})

export default api;
