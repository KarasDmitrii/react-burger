
import {
    WS_ORDERS_CONNECTION_SUCCESS,
    WS_ORDERS_CONNECTION_ERROR,
    WS_ORDERS_CONNECTION_CLOSED,
    WS_ORDERS_GET_MESSAGE
} from './OrderListActions';
import { orderListReducer } from './OrderListReducer';

describe('orderListReducer', () => {
    const initialState = {
        wsOrdersConnected: false,
        ordersError: undefined,
        ordersMessages: {
            orders: [],
            total: 0,
            totalToday: 0
        }
    };
    it('should return the initial state', () => {
        expect(orderListReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle WS_ORDERS_CONNECTION_SUCCESS', () => {
        const action = { type: WS_ORDERS_CONNECTION_SUCCESS };
        const expectedState = {
            ...initialState,
            ordersError: undefined,
            wsOrdersConnected: true
        };
        expect(orderListReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle WS_ORDERS_CONNECTION_ERROR', () => {
        const action = { type: WS_ORDERS_CONNECTION_ERROR, payload: 'Connection Failed' };
        const expectedState = {
            ...initialState,
            ordersError: 'Connection Failed',
            wsOrdersConnected: false
        };
        expect(orderListReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle WS_ORDERS_CONNECTION_CLOSED', () => {
        const action = { type: WS_ORDERS_CONNECTION_CLOSED };
        const expectedState = {
            ...initialState,
            ordersError: undefined,
            wsOrdersConnected: false
        };
        expect(orderListReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle WS_ORDERS_GET_MESSAGE', () => {
        const ordersMessages = {
            orders: [{ id: 1, name: 'Order 1' }],
            total: 1,
            totalToday: 0
        };
        const action = { type: WS_ORDERS_GET_MESSAGE, payload: ordersMessages };
        const expectedState = {
            ...initialState,
            ordersError: undefined,
            ordersMessages
        };
        expect(orderListReducer(initialState, action)).toEqual(expectedState);
    });
});
