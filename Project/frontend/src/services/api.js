import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'http://localhost:8080/api', // Your Spring Boot backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Optional: Add request interceptor for JWT token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // assuming you store JWT in localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Optional: Add response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;
