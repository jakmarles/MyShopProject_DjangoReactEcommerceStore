// This file contains the logic for our cart reducer. 
// Our cart reducer is going to be responsible for maintaining the state of our cart items, 
// shipping address and payment method for our e-commerce app. 
// We will be using switch statements to determine which action to perform on our state.

import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
    CART_CLEAR_ITEMS,
} from '../constants/cartConstants'


export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            // Check if the item already exists in the cart
            const item = action.payload
            const existItem = state.cartItems.find(x => x.product === item.product)

            // If the item already exists, update its quantity
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x)
                }

            // If the item doesn't exist, add it to the cart
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_ITEM:
            // Remove the item from the cart
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }

        case CART_SAVE_SHIPPING_ADDRESS:
            // Save the shipping address in the state
            return {
                ...state,
                shippingAddress: action.payload
            }

        case CART_SAVE_PAYMENT_METHOD:
            // Save the payment method in the state
            return {
                ...state,
                paymentMethod: action.payload
            }

        case CART_CLEAR_ITEMS:
            // Clear all items from the cart
            return {
                ...state,
                cartItems: []
            }

        default:
            // If the action is not recognized, return the current state
            return state
    }
}
