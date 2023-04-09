import {
    CLOSE_ORDER_MODAL,
    SEND_ORDER_SUCCESS,
    SEND_ORDER_ERROR,
    ORD_LOADING
} from "./OrderActions";
import { IOrderInitState, TOrderActions } from "./OrderTypes";

export const orderInitialState: IOrderInitState = {
    isOrdModalOpen: false,
    orderNum: 0,
    sendOrderError: false,
    isOrdLoading: false,
}

export const orderReducer = (state = orderInitialState, action: TOrderActions) => {
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