// Import all the constants related to product management
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET,

    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,

    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,

    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_FAIL,
} from '../constants/productConstants'


// productListReducer is responsible for handling actions related to product list fetch
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        // When the request for fetching product list is sent, set loading to true and products to an empty array
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }

        // When the product list is successfully fetched, set loading to false, set products to the fetched products, 
        // and set the page and pages properties to the corresponding values from the action payload
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                page: action.payload.page,
                pages: action.payload.pages
            }

        // When the fetching of product list fails, set loading to false and set the error property to the error from the action payload
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        // When there is no matching action, return the current state
        default:
            return state
    }
}

// productDetailsReducer is responsible for handling actions related to product details fetch
export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        // When the request for fetching product details is sent, set loading to true
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }

        // When the product details are successfully fetched, set loading to false and set product to the fetched product
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }

        // When the fetching of product details fails, set loading to false and set the error property to the error from the action payload
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        // When there is no matching action, return the current state
        default:
            return state
    }
}

// productDeleteReducer is responsible for handling actions related to product delete
export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        // When the request for deleting a product is sent, set loading to true
        case PRODUCT_DELETE_REQUEST:
            return { loading: true }

        // When the product is successfully deleted, set loading to false and set success to true
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true }

        // When the deletion of the product fails, set loading to false and set the error property to the error from the action payload
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }

        // When there is no matching action, return the current state
        default:
            return state
    }
}



// productCreateReducer is responsible for handling actions related to product creation
export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        // When the request for creating a product is sent, set loading to true
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }

        // When the product is successfully created, set loading to false, set success to true, 
        // and set product to the newly created product from the action payload
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }

        // When the creation of the product fails, set loading to false and set the error property to the error from the action payload
        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }

        // When the PRODUCT_CREATE_RESET action is dispatched, reset the state to an empty object
        case PRODUCT_CREATE_RESET:
            return {}

        // When there is no matching action, return the current state
        default:
            return state
    }
}

// productUpdateReducer is responsible for handling actions related to product update
export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        // When the request for updating a product is sent, set loading to true
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true }

        // When the product is successfully updated, set loading to false, set success to true, 
        // and set product to the updated product from the action payload
        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }

        // When the update of the product fails, set loading to false and set the error property to the error from the action payload
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        // When the PRODUCT_UPDATE_RESET action is dispatched, reset the product property to an empty object
        case PRODUCT_UPDATE_RESET:
            return { product: {} }

        // When there is no matching action, return the current state
        default:
            return state
    }
}




// productReviewCreateReducer is responsible for handling actions related to product review creation
export const productReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        // When the request for creating a product review is sent, set loading to true
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true }

        // When the product review is successfully created, set loading to false and set success to true
        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true, }

        // When the creation of the product review fails, set loading to false and set the error property to the error from the action payload
        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }

        // When the PRODUCT_CREATE_REVIEW_RESET action is dispatched, reset the state to an empty object
        case PRODUCT_CREATE_REVIEW_RESET:
            return {}

        // When there is no matching action, return the current state
        default:
            return state
    }
}

// productTopRatedReducer is responsible for handling actions related to fetching top rated products
export const productTopRatedReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        // When the request for fetching top rated products is sent, set loading to true and products to an empty array
        case PRODUCT_TOP_REQUEST:
            return { loading: true, products: [] }

        // When the top rated products are successfully fetched, set loading to false and set products to the fetched products
        case PRODUCT_TOP_SUCCESS:
            return { loading: false, products: action.payload, }

        // When the fetching of top rated products fails, set loading to false and set the error property to the error from the action payload
        case PRODUCT_TOP_FAIL:
            return { loading: false, error: action.payload }

        // When there is no matching action, return the current state
        default:
            return state
    }
}