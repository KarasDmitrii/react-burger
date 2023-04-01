

import { 
    WS_ORDERS_CONNECTION_CLOSED, 
    WS_ORDERS_CONNECTION_ERROR, 
    WS_ORDERS_CONNECTION_SUCCESS, 
    WS_ORDERS_GET_MESSAGE 
} from './OrderListActions';
import { TOrderListActions , IOrderListState } from './OrderListTypes';



const initialState: IOrderListState = {
    wsOrdersConnected: false,
    ordersError: undefined,
    ordersMessages: {
        orders: [],
        total: 0,
        totalToday: 0
    }
};

export const orderListReducer = (state = initialState, action: TOrderListActions ): IOrderListState => {
    switch (action.type) {
    
        case WS_ORDERS_CONNECTION_SUCCESS:
            return {
                ...state,
                ordersError: undefined,
                wsOrdersConnected: true
            };

        case WS_ORDERS_CONNECTION_ERROR:
            return {
                ...state,
                ordersError: action.payload,
                wsOrdersConnected: false
            };

        case WS_ORDERS_CONNECTION_CLOSED:
            return {
                ...state,
                ordersError: undefined,
                wsOrdersConnected: false
            };

        case WS_ORDERS_GET_MESSAGE:
            return {
                ...state,
                ordersError: undefined,
                ordersMessages: action.payload
            };
        default:
            return state;
    }
}; 