
import { ADD_USER, LOG_OUT, PATH_USER, AUTH_ERROR, RESET_PASSWORD, FORGOT_PASSWORD, REFRESH_TOKEN } from "./UserAction"

const initialState = {
    activeUser: false,
    authError: false,
    isResetPasswordSuccess: false,
    isForgotPasswordSuccess: false,

};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:

            return {
                ...state,
                activeUser: true,
                authError: false,
                name: action.payload.user.name,
                email: action.payload.user.email,
                password: action.payload.password
            }
        case PATH_USER:

            return {
                ...state,
                activeUser: true,
                authError: false,
                name: action.payload.name || state.name,
                email: action.payload.email || state.email,
                
            }
        case LOG_OUT:
            return {
                activeUser: false,
                authError: false
            }
        case AUTH_ERROR:
            return {
                ...state,
                authError: true
            }
        case RESET_PASSWORD:
            return {
                ...state,
                isResetPasswordSuccess: true
            }
        case FORGOT_PASSWORD:
            return {
                ...state,
                isForgotPasswordSuccess: true
            }
        case REFRESH_TOKEN:
            return {
                ...state,
            }        
        default:
            return state;
    }
};