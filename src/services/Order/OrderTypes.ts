import { CLOSE_ORDER_MODAL, ORD_LOADING, SEND_ORDER_ERROR, SEND_ORDER_SUCCESS } from "./OrderActions";

export interface ICloseOrderModal {
    readonly type: typeof CLOSE_ORDER_MODAL
}

export interface ISendOrderError {
    readonly type: typeof SEND_ORDER_ERROR
}

export interface ISendOrderSuccess {
    readonly type: typeof SEND_ORDER_SUCCESS,
    payload: {success: boolean, name: string, order: {number: number}} 
}

export interface IOrdLoading {
    readonly type: typeof ORD_LOADING
}

export type TOrderActions = 
ICloseOrderModal |
ISendOrderError |
ISendOrderSuccess |
IOrdLoading;

export interface IOrderInitState {
    isOrdModalOpen: boolean,
    orderNum: number,
    sendOrderError: boolean,
    isOrdLoading: boolean,
}