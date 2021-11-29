import axios from 'axios';
import { toast } from "react-toastify"
import { setAuth } from '../app/store/actions/authActions';

export const api = axios.create({
    baseURL: process.env.REACT_APP_ENV === 'production'
        ? process.env.REACT_APP_PROD_SERVER_URL
        : process.env.REACT_APP_DEV_SERVER_URL,
    withCredentials: true
});

api.interceptors.response.use(
    response => {
        // toast.success(response.data.message)
        return response;
    },
    error => {
        if (error.message.includes('Network Error')) {
            return toast.error('Network error, please try again later.');
        }
        switch (error.response.status) {
            case 401:
                setAuth({})//Authentication error
                toast.error("Authentication Required");
                return Promise.reject(error);
            case 403:
                toast.error("You don't have permission to do this");
                return Promise.reject(error);
            case 404:
                toast.error("404 : Page not found");
                return Promise.reject(error);
            default:
                toast.error("Something went wrong");
        }
    }
);