import { IWsResp, TWsRespOrder } from "../../utils/types"
import { WS_ORDERS_CONNECT, WS_ORDERS_CONNECTION_CLOSED, WS_ORDERS_CONNECTION_ERROR, WS_ORDERS_CONNECTION_START, WS_ORDERS_CONNECTION_SUCCESS, WS_ORDERS_DISCONNECT, WS_ORDERS_GET_MESSAGE, WS_ORDERS_SEND_MESSAGE } from "./OrderListActions"

export interface IWsOrdersConnectionStartAction {
    readonly type: typeof WS_ORDERS_CONNECTION_START
}

export interface IWsOrdersConnectionSuccessAction {
    readonly type: typeof WS_ORDERS_CONNECTION_SUCCESS
}

export interface IWsOrdersConnectionErrorAction {
    readonly type: typeof WS_ORDERS_CONNECTION_ERROR,
    payload: Event
}

export interface IWsOrdersConnectionClosedtAction {
    readonly type: typeof WS_ORDERS_CONNECTION_CLOSED
}

export interface IWsOrdersGetMessageAction {
    readonly type: typeof WS_ORDERS_GET_MESSAGE,
    payload: IWsResp
}

export interface IWsOrdersSendMessage {
    readonly type: typeof WS_ORDERS_SEND_MESSAGE
    payload: IWsResp
}

export interface IWsOrdersConnect {
    readonly type: typeof WS_ORDERS_CONNECT
    payload: string
}

export interface IWsOrdersDisconect {
    readonly type: typeof WS_ORDERS_DISCONNECT
}

export type TOrderListActions = 
IWsOrdersSendMessage | 
IWsOrdersConnect | 
IWsOrdersDisconect | 
IWsOrdersConnectionClosedtAction | 
IWsOrdersConnectionStartAction | 
IWsOrdersConnectionSuccessAction | 
IWsOrdersConnectionErrorAction | 
IWsOrdersGetMessageAction;

export type TWsOrdersActionTypes = {
    wsConnect: typeof WS_ORDERS_CONNECT,
    wsDisconect: typeof WS_ORDERS_DISCONNECT,
  
    wsSendMessage: typeof WS_ORDERS_SEND_MESSAGE,
    wsConecting: typeof WS_ORDERS_CONNECTION_SUCCESS,
    onOpen: typeof WS_ORDERS_CONNECTION_START,
    onClose: typeof WS_ORDERS_CONNECTION_CLOSED,
    onError: typeof WS_ORDERS_CONNECTION_ERROR,
    onMessage: typeof WS_ORDERS_GET_MESSAGE
  
  }


export interface IOrderListState {
    wsOrdersConnected: boolean;
    ordersMessages: IWsResp | undefined;
    ordersError: Event | undefined;
}
