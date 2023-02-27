// Import all the constants related to order management
import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET,
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
    ORDER_DELIVER_RESET
} from '../constants/orderConstants'

// Order create reducer to handle actions related to creating an order
export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        // When order creation request is in progress
        case ORDER_CREATE_REQUEST:
            return {
                loading: true
            }

        // When order creation is successful
        case ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            }

        // When order creation fails
        case ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        // When order creation is reset
        case ORDER_CREATE_RESET:
            return {}

        default:
            return state
    }
}

// Order details reducer to handle actions related to retrieving order details
export const orderDetailsReducer = (state = { loading: true, orderItems: [], shippingAddress: {} }, action) => {
    switch (action.type) {
        // When order details request is in progress
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        // When order details retrieval is successful
        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }

        // When order details retrieval fails
        case ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}


// Order pay reducer to handle actions related to paying for an order
export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
        // When the pay request is initiated, set loading to true
        case ORDER_PAY_REQUEST:
            return {
                loading: true
            }

        // When the pay request is successful, set loading to false and success to true
        case ORDER_PAY_SUCCESS:
            return {
                loading: false,
                success: true
            }

        // When the pay request fails, set loading to false and error to the payload
        case ORDER_PAY_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        // When the pay request is reset, return an empty object
        case ORDER_PAY_RESET:
            return {}

        default:
            return state
    }
}

// Order deliver reducer to handle actions related to delivering an order
export const orderDeliverReducer = (state = {}, action) => {
    switch (action.type) {
        // When the deliver request is initiated, set loading to true
        case ORDER_DELIVER_REQUEST:
            return {
                loading: true
            }

        // When the deliver request is successful, set loading to false and success to true
        case ORDER_DELIVER_SUCCESS:
            return {
                loading: false,
                success: true
            }

        // When the deliver request fails, set loading to false and error to the payload
        case ORDER_DELIVER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        // When the deliver request is reset, return an empty object
        case ORDER_DELIVER_RESET:
            return {}

        default:
            return state
    }
}

// Order list my reducer to handle actions related to getting a list of orders for the logged in user
export const orderListMyReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        // When the list my order request is initiated, set loading to true
        case ORDER_LIST_MY_REQUEST:
            return {
                loading: true
            }

        // When the list my order request is successful, set loading to false and orders to the payload
        case ORDER_LIST_MY_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }

        // When the list my order request fails, set loading to false and error to the payload
        case ORDER_LIST_MY_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        // When the list my order request is reset, return an object with an empty orders array
        case ORDER_LIST_MY_RESET:
            return {
                orders: []
            }

        default:
            return state
    }
}



// orderListReducer to handle actions related to retrieving a list of orders
export const orderListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            // when the request to retrieve a list of orders starts, set loading to true
            return {
                loading: true
            }

        case ORDER_LIST_SUCCESS:
            // when the request is successful, set loading to false and add the payload (the list of orders) to the state
            return {
                loading: false,
                orders: action.payload
            }

        case ORDER_LIST_FAIL:
            // when the request fails, set loading to false and add the error message to the state
            return {
                loading: false,
                error: action.payload
            }

        default:
            // return the original state if no actions match
            return state
    }
}