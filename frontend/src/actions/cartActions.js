import axios from 'axios'
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

// addToCart function is responsible for fetching a product and adding it to the cart
export const addToCart = (id, qty) => async (dispatch, getState) => {
    // fetch the product details using its id
    const { data } = await axios.get(`/api/products/${id}`)

    // dispatch an action with the product data to add it to the cart
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    // store the updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// removeFromCart function is responsible for removing an item from the cart
export const removeFromCart = (id) => (dispatch, getState) => {
    // dispatch an action to remove the item from the cart
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    // store the updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// saveShippingAddress function is responsible for saving the shipping address
export const saveShippingAddress = (data) => (dispatch) => {
    // dispatch an action to save the shipping address
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })

    // store the shipping address in local storage
    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

// savePaymentMethod function is responsible for saving the payment method
export const savePaymentMethod = (data) => (dispatch) => {
    // dispatch an action to save the payment method
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    })

    // store the payment method in local storage
    localStorage.setItem('paymentMethod', JSON.stringify(data))
}
