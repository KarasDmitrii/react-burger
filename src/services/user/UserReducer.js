
import { ADD_USER, LOG_IN, LOG_OUT } from "./UserAction"

const initialState = {
    activeUser: true,
    
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                activeUser: true
            }
        case LOG_OUT:
            return {
                ...state,
                activeUser: false
            }
        default:
            return state;        
    }
};