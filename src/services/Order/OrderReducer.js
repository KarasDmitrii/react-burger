import {
    OPEN_ORDER_MODAL,
    CLOSE_ORDER_MODAL
} from "./OrderActions";

const initialState = {
    isOrdModalOpen: false,
    orderNum: '034536',
}

export const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_ORDER_MODAL:
            return {
                ...state,
                isOrdModalOpen: false
            };
        case OPEN_ORDER_MODAL:
            return {
                ...state,
                isOrdModalOpen: true
            };
        default:
            return state;
    }

}