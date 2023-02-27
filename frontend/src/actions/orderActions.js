import axios from 'axios'
import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_RESET,

    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_RESET,

    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,

    ORDER_DELIVER_REQUEST,
    ORDER_DELIVER_SUCCESS,
    ORDER_DELIVER_FAIL,
    ORDER_DELIVER_RESET,
} from '../constants/orderConstants'

// Import the CART_CLEAR_ITEMS constant
import { CART_CLEAR_ITEMS } from '../constants/cartConstants'

// createOrder is responsible for creating a new order
export const createOrder = (order) => async (dispatch, getState) => {
    try {
        // Dispatch the ORDER_CREATE_REQUEST action when the create order request is sent
        dispatch({
            type: ORDER_CREATE_REQUEST
        })

        // Get the userInfo from the state
        const {
            userLogin: { userInfo },
        } = getState()

        // Set the headers for the axios post request
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        // Make the post request to the API to create the order
        const { data } = await axios.post(
            `/api/orders/add/`,
            order,
            config
        )

        // Dispatch the ORDER_CREATE_SUCCESS action when the order is successfully created
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })

        // Dispatch the CART_CLEAR_ITEMS action to clear the items from the cart
        dispatch({
            type: CART_CLEAR_ITEMS,
            payload: data
        })

        // Remove the cartItems from local storage
        localStorage.removeItem('cartItems')

    } catch (error) {
        // Dispatch the ORDER_CREATE_FAIL action if there is an error creating the order
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


// getOrderDetails is responsible for fetching the details of a specific order
export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
        // Dispatch the ORDER_DETAILS_REQUEST action when the request to get order details is sent
        dispatch({
            type: ORDER_DETAILS_REQUEST
        })

        // Get the userInfo from the state
        const {
            userLogin: { userInfo },
        } = getState()

        // Set the headers for the axios get request
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        // Make the get request to the API to fetch the order details
        const { data } = await axios.get(
            `/api/orders/${id}/`,
            config
        )

        // Dispatch the ORDER_DETAILS_SUCCESS action when the order details are successfully fetched
        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        // Dispatch the ORDER_DETAILS_FAIL action if there is an error fetching the order details
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

// payOrder is responsible for paying for an order
export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
    try {
        // Dispatch the ORDER_PAY_REQUEST action when the request to pay for an order is sent
        dispatch({
            type: ORDER_PAY_REQUEST
        })

        // Get the userInfo from the state
        const {
            userLogin: { userInfo },
        } = getState()

        // Set the headers for the axios put request
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        // Make the put request to the API to pay for the order
        const { data } = await axios.put(
            `/api/orders/${id}/pay/`,
            paymentResult,
            config
        )

        // Dispatch the ORDER_PAY_SUCCESS action when the order is successfully paid for
        dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data
        })

    } catch (error) {
        // Dispatch the ORDER_PAY_FAIL action if there is an error paying for the order
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

// deliverOrder is responsible for delivering an order
export const deliverOrder = (order) => async (dispatch, getState) => {
    try {
        // Dispatch the ORDER_DELIVER_REQUEST action when the request to deliver an order is sent
        dispatch({
            type: ORDER_DELIVER_REQUEST
        })

        // Get the userInfo from the state
        const {
            userLogin: { userInfo },
        } = getState()

        // Set the headers for the axios put request
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        // Make the put request to the API to deliver the order
        const { data } = await axios.put(
            `/api/orders/${order._id}/deliver/`,
            {},
            config
        )

        // Dispatch the ORDER_DELIVER_SUCCESS action when the order is successfully delivered
        dispatch({
            type: ORDER_DELIVER_SUCCESS,
            payload: data
        })

    } catch (error) {
        // Dispatch the ORDER_DELIVER_FAIL action if there is an error delivering the order
        dispatch({
            type: ORDER_DELIVER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

// listMyOrders is responsible for listing the orders of the logged in user
export const listMyOrders = () => async (dispatch, getState) => {
    try {
        // Dispatch the ORDER_LIST_MY_REQUEST action when the request to list the user's orders is sent
        dispatch({
            type: ORDER_LIST_MY_REQUEST
        })

        // Get the userInfo from the state
        const {
            userLogin: { userInfo },
        } = getState()

        // Set the headers for the axios get request
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        // Make the get request to the API to list the user's orders
        const { data } = await axios.get(
            `/api/orders/myorders/`,
            config
        )

        // Dispatch the ORDER_LIST_MY_SUCCESS action when the user's orders are successfully listed
        dispatch({
            type: ORDER_LIST_MY_SUCCESS,
            payload: data
        })

    } catch (error) {
        // Dispatch the ORDER_LIST_MY_FAIL action if there is an error listing the user's orders
        dispatch({
            type: ORDER_LIST_MY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


// listOrders function is responsible for fetching a list of all orders

export const listOrders = () => async (dispatch, getState) => {
    // Dispatch an action indicating the start of the request
    dispatch({
        type: ORDER_LIST_REQUEST
    });

    // Get the current state and extract the userInfo object from it
    const {
        userLogin: { userInfo },
    } = getState();

    // Set the authorization header for the axios request
    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    };

    try {
        // Make the axios GET request to the API to retrieve the orders list
        const { data } = await axios.get(
            `/api/orders/`,
            config
        );

        // Dispatch an action indicating the success of the request, with the received data as the payload
        dispatch({
            type: ORDER_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        // Dispatch an action indicating the failure of the request, with the error message as the payload
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
