import axios from "axios";
import { errorHandle, notify } from "../../utils/Common/Notification";

const API_URL = 'http://localhost:8080/api';

// get authorization token 
const getAuthToken = () => {
    return JSON.parse(localStorage.getItem('user'))?.authorization; // Adjust the key if needed
};

// user Endpoint

export const registerUser = async (body) => {
    try {
        const response = await axios.post(`${API_URL}/user/register`, body);
        notify('Successfully registered user', 'success')
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

// User Endpoints
export const updateUser = async (formData) => {
    try {
        const response = await axios.put(`${API_URL}/user/update`, formData, {
            headers: { Authorization: getAuthToken() }
        });
        notify('Successfully update user', 'success')
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

// Item Endpoints

export const getItemById = async (itemId) => {
    try {
        const response = await axios.get(`${API_URL}/item/${itemId}`, {
            headers: { Authorization: getAuthToken() }
        });
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

export const getAllItems = async (page = 0, size = 10, itemName, categoryName, rate) => {
    try {
        const response = await axios.get(`${API_URL}/item/items`, {
            params: { page, size, itemName, categoryName, rate },
            headers: { Authorization: getAuthToken() }
        });
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

// Category Endpoints

export const getAllCategories = async (page = 0, size = 10, categoryName) => {
    try {
        const response = await axios.get(`${API_URL}/category/categories`, {
            params: { page, size, categoryName },
            headers: { Authorization: getAuthToken() }
        });
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

// Offer Endpoints

export const getAllOffers = async () => {
    try {
        const response = await axios.get(`${API_URL}/offer/offers`, {
            // params: { page, size, offerName, startDate, endDate },
            headers: { Authorization: getAuthToken() }
        });
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

// Order Endpoints

export const updateOrderStatus = async (orderId, status) => {
    try {
        const response = await axios.put(`${API_URL}/order/update-order-status/${orderId}`, { status }, {
            headers: { Authorization: getAuthToken() }
        });
        notify('Successfully update order status', 'success')
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

// create inquiry 

export const createInquiry = async (body) => {
    try {
        const response = await axios.post(`${API_URL}/quiry/create-inquiry`, body, {
            headers: { Authorization: getAuthToken() }
        });
        notify('Successfully send inquiry', 'success')
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

export const getAllInquiryById = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/quiry/inquiries`, {
            params: { 'userId': userId },
            headers: { Authorization: getAuthToken() }
        });
        return response.data;
    } catch (error) {
        console.log(error)
        errorHandle(error)
        throw error;
    }
}

export const getAllInquiry = async () => {
    try {
        const response = await axios.get(`${API_URL}/quiry/inquiries`, {
            headers: { Authorization: getAuthToken() }
        });
        return response.data;
    } catch (error) {
        console.log(error)
        errorHandle(error)
        throw error;
    }
}