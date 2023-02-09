
import { ADD_USER, LOG_IN, LOG_OUT, PATH_USER, AUTH_ERROR, RESET_PASSWORD, FORGOT_PASSWORD } from "./UserAction"

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
                name: action.payload.name,
                email: action.payload.email,
                
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
        default:
            return state;
    }
};