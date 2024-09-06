import axios from "axios";
import { errorHandle, notify } from "../../utils/Common/Notification";

// api common url 
const API_URL = 'http://localhost:8080/api';

// get authorization token 
const getAuthToken = () => {
    return JSON.parse(localStorage.getItem('user')).authorization; // Adjust the key if needed
};

// User Endpoints

export const loginUser = async (body) => {
    try {
        const response = await axios.post(`${API_URL}/user/login`, body);
        notify(`Welcome ${response.data.fullName}.`, 'success');
        return response;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

// Order Endpoints
export const placeOrder = async (orderData) => {
    try {
        const response = await axios.post(`${API_URL}/order/place-order`, orderData, {
            headers: { Authorization: getAuthToken() }
        });
        notify('Order place successful', 'success')
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

export const getAllOrderById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/order/orders`, {
            params: { 'userId': id },
            headers: { Authorization: getAuthToken() }
        });
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}