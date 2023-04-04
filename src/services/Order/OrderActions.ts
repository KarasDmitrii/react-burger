
import { TAppDispatch } from "../..";
import { AppThunk } from "../../hooks/hooks";
import { sendOrderApi } from "../../utils/TrueBurgerApi";




export const OPEN_ORDER_MODAL: 'OPEN_ORD_MODAL' = 'OPEN_ORD_MODAL';
export const CLOSE_ORDER_MODAL: 'CLOSE_ORDER_MODAL' = 'CLOSE_ORDER_MODAL';
export const SEND_ORDER_SUCCESS: 'SEND_ORDER_SUCCESS' = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_ERROR: 'SEND_ORDER_ERROR' = 'SEND_ORDER_ERROR';

export const ORD_LOADING: 'ORD_LOADING' = 'ORD_LOADING';

export const sendOrder = (order: {"ingredients": Array<string>}): AppThunk => {
    return function(dispatch: TAppDispatch) { 
        dispatch({
            type: ORD_LOADING
        })
        sendOrderApi(order).then(res => {
            dispatch({
                type: SEND_ORDER_SUCCESS,
                payload: res
            })
        }).catch(() =>
            dispatch({
                type: SEND_ORDER_ERROR
            }))   
    }
}