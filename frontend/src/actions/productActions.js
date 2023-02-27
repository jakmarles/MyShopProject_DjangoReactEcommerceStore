
//this file is going to be in charge of replacing the API call that we made in our home screen.
//So instead of making this API call from our home screen component, we're going to make it from here. 
//So the action will now be in charge of making this call in this action.
//Once we actually get back that data, we're going to dispatch our product producer.

import axios from "axios";
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
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
} from "../constants/productConstants";

export const listProducts =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST }); // Dispatch a request to the server to retrieve the list of products

      const { data } = await axios.get(`/api/products${keyword}`); // Send the request to the server and get the response data

      dispatch({
        // Dispatch a successful response with the list of products from the server
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        // Dispatch a failed response when the attempt to retrieve the list of products fails
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST }); // Dispatch a request to the server to retrieve the top rated products

    const { data } = await axios.get(`/api/products/top/`); // Send the request to the server and get the response data

    dispatch({
      // Dispatch a successful response with the top rated products from the server
      type: PRODUCT_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      // Dispatch a failed response when the attempt to retrieve the top rated products fails
      type: PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST }); // Dispatch a request to the server to retrieve the details of a specific product

    const { data } = await axios.get(`/api/products/${id}`); // Send the request to the server and get the response data

    dispatch({
      // Dispatch a successful response with the details of the product from the server
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      // Dispatch a failed response when the attempt to retrieve the product details fails
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST }); // Dispatch a request to the server to delete the product

    const {
      userLogin: { userInfo },
    } = getState(); // retrieves the logged-in user's information from the state

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`, // Attach the authorization token to the request
      },
    };

    const { data } = await axios.delete(`/api/products/delete/${id}/`, config); // Send the request with the config object

    dispatch({ type: PRODUCT_DELETE_SUCCESS }); // Dispatch a success response when the product is successfully deleted
  } catch (error) {
    dispatch({
      // Dispatch a failed response when the attempt to delete the product fails
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST }); // Dispatch a request to the server to create a new product

    const {
      userLogin: { userInfo },
    } = getState(); // retrieves the logged-in user's information from the state

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`, // Attach the authorization token to the request
      },
    };

    const { data } = await axios.post(`/api/products/create/`, {}, config); // Send the request with the config object

    dispatch({
      // Dispatch a success response when the new product is created successfully
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      // Dispatch a failed response when the attempt to create a new product fails
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST }); // Dispatch a request to the server to update the product

    const {
      userLogin: { userInfo },
    } = getState(); // retrieves the logged-in user's information from the state

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`, // Attach the authorization token to the request
      },
    };

    const { data } = await axios.put(
      `/api/products/update/${product._id}/`,
      product,
      config
    ); // Send the request with the config object and the updated product data

    dispatch({
      // Dispatch a success response when the product is updated successfully
      type: PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      // Dispatch a success response with the updated product details
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      // Dispatch a failed response when the attempt to update the product fails
      type: PRODUCT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST }); // Dispatch a request to the server to create a new review

      const {
        userLogin: { userInfo },
      } = getState(); // retrieves the logged-in user's information from the state

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`, // Attach the authorization token to the request
        },
      };

      const { data } = await axios.post(
        `/api/products/${productId}/reviews/`,
        review,
        config
      ); // Send the request with the config object and the new review data

      dispatch({
        // Dispatch a success response when the new review is created successfully
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        // Dispatch a failed response when the attempt to create a new review fails
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
