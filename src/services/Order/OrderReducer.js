import {
    OPEN_ORDER_MODAL,
    CLOSE_ORDER_MODAL,
    SEND_ORDER_SUCCESS,
    SEND_ORDER_ERROR
} from "./OrderActions";

const initialState = {
    isOrdModalOpen: false,
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
                isOrdModalOpen: true,
                orderNum: action.payload.order.number
            };
        case SEND_ORDER_ERROR:
            return {
                ...state,
                sendOrderError: true
            }
        default:
            return state;
    }

}