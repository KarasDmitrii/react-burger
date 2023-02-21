import {
    CLOSE_ORDER_MODAL,
    SEND_ORDER_SUCCESS,
    SEND_ORDER_ERROR,
    ORD_LOADING
} from "./OrderActions";

const initialState = {
    isOrdModalOpen: false,
    orderNum: 0,
    sendOrderError: false,
    isOrdLoading: false,
    orderNum: 0,
    sendOrderError: false
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_ORDER_MODAL:
            return {
                ...state,
                isOrdModalOpen: false
            };
        case SEND_ORDER_SUCCESS:
            return {
                ...state,
                isOrdLoading: false,
                isOrdModalOpen: true,
                orderNum: action.payload.order.number,
                orderNum: action.payload.order.number
            };
        case SEND_ORDER_ERROR:
            return {
                ...state,
                sendOrderError: true
            }
        case SEND_ORDER_ERROR:
            return {
                ...state,
                isOrdLoading: false,
                sendOrderError: true
            }
        case ORD_LOADING:
            return {
                ...state,
                isOrdModalOpen: true,
                isOrdLoading: true
            }    
        default:
            return state;
    }
}