

import { sendOrderApi } from "../../utils/TrueBurgerApi";

export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_ERROR = 'SEND_ORDER_ERROR';

export function sendOrder(order) {
    return function(dispatch) { 
        sendOrderApi(order).then(res => {
            dispatch({
                type: SEND_ORDER_SUCCESS,
                payload: res
            })
        }).catch(
            dispatch({
                type: SEND_ORDER_ERROR
            }))   
    }
}