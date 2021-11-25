import axios from 'axios';
import { toast } from "react-toastify"

export const api = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true
});

api.interceptors.response.use(
    response => response,
    error => {
        switch (error.response.status) {
            case 404:
                toast.error("404 : Page not found");
                return Promise.reject(error);
            default:
                toast.error("Something went wrong");
        }
    }
);