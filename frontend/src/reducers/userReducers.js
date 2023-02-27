// Import all the constants related to user management
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,

    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,

    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_RESET,

} from '../constants/userConstants'


// userLoginReducer to handle actions related to user login
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { 
                // set loading to true while the request is being processed
                loading: true 
            }

        case USER_LOGIN_SUCCESS:
            return { 
                // set loading to false and store the user information in userInfo
                loading: false, 
                userInfo: action.payload 
            }

        case USER_LOGIN_FAIL:
            return { 
                // set loading to false and store the error in error
                loading: false, 
                error: action.payload 
            }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

// userRegisterReducer to handle actions related to user registration
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { 
                // set loading to true while the request is being processed
                loading: true 
            }

        case USER_REGISTER_SUCCESS:
            return { 
                // set loading to false and store the user information in userInfo
                loading: false, 
                userInfo: action.payload 
            }

        case USER_REGISTER_FAIL:
            return { 
                // set loading to false and store the error in error
                loading: false, 
                error: action.payload 
            }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

// userDetailsReducer to handle actions related to retrieving user details
export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { 
                ...state,
                // set loading to true while the request is being processed
                loading: true 
            }

        case USER_DETAILS_SUCCESS:
            return { 
                // set loading to false and store the user information in user
                loading: false, 
                user: action.payload 
            }

        case USER_DETAILS_FAIL:
            return { 
                // set loading to false and store the error in error
                loading: false, 
                error: action.payload 
            }

        case USER_DETAILS_RESET:
            return { 
                // reset the user information
                user: {} 
            }

        default:
            return state
    }
}


//userUpdateProfileReducer: updates the user profile information
export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        //sets loading to true when a request is made to update the user profile
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true }

        //returns loading as false and sets success to true, and sets the userInfo to the returned payload when the update is successful
        case USER_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }

        //returns loading as false and sets error to the returned payload when the update fails
        case USER_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload }

        //resets the state to an empty object when the profile update is reset
        case USER_UPDATE_PROFILE_RESET:
            return {}

        //returns the current state if no actions are taken
        default:
            return state
    }
}

//userListReducer: handles actions related to retrieving the list of users
export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        //sets loading to true when a request is made to retrieve the list of users
        case USER_LIST_REQUEST:
            return { loading: true }

        //returns loading as false and sets the users list to the returned payload when the request is successful
        case USER_LIST_SUCCESS:
            return { loading: false, users: action.payload }

        //returns loading as false and sets error to the returned payload when the request fails
        case USER_LIST_FAIL:
            return { loading: false, error: action.payload }

        //resets the state of the users list to an empty array when the list is reset
        case USER_LIST_RESET:
            return { users: [] }

        //returns the current state if no actions are taken
        default:
            return state
    }
}

//userDeleteReducer: handles actions related to deleting a user
export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        //sets loading to true when a request is made to delete a user
        case USER_DELETE_REQUEST:
            return { loading: true }

        //returns loading as false and sets success to true when the delete is successful
        case USER_DELETE_SUCCESS:
            return { loading: false, success: true }

        //returns loading as false and sets error to the returned payload when the delete fails
        case USER_DELETE_FAIL:
            return { loading: false, error: action.payload }

        //returns the current state if no actions are taken
        default:
            return state
    }
}

//userUpdateReducer: handles actions related to updating a user
export const userUpdateReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            // return the loading state as true when the USER_UPDATE_REQUEST action is dispatched
            return { loading: true }

        case USER_UPDATE_SUCCESS:
            // return the loading state as false and success as true when the USER_UPDATE_SUCCESS action is dispatched
            return { loading: false, success: true }

        case USER_UPDATE_FAIL:
            // return the loading state as false and the error payload when the USER_UPDATE_FAIL action is dispatched
            return { loading: false, error: action.payload }

        case USER_UPDATE_RESET:
            // return an empty object for the user when the USER_UPDATE_RESET action is dispatched
            return { user: {} }

        default:
            return state
    }
}