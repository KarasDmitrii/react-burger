import { IWsResp } from "../../utils/types"
import { 
    WS_FEED_CONNECT, 
    WS_FEED_CONNECTION_CLOSED, 
    WS_FEED_CONNECTION_ERROR, 
    WS_FEED_CONNECTION_START, 
    WS_FEED_CONNECTION_SUCCESS, 
    WS_FEED_DISCONNECT, 
    WS_FEED_GET_MESSAGE, 
    WS_FEED_SEND_MESSAGE 
} from "./FeedActions"

export interface IWsFeedConnectionStartAction {
    readonly type: typeof WS_FEED_CONNECTION_START
}

export interface IWsFeedConnectionSuccessAction {
    readonly type: typeof WS_FEED_CONNECTION_SUCCESS
}

export interface IWsFeedConnectionErrorAction {
    readonly type: typeof WS_FEED_CONNECTION_ERROR,
    payload: Event
}

export interface IWsFeedConnectionClosedtAction {
    readonly type: typeof WS_FEED_CONNECTION_CLOSED
}

export interface IWsFeedGetMessageAction {
    readonly type: typeof WS_FEED_GET_MESSAGE,
    payload: IWsResp
}

export interface IWsFeedSendMessage {
    readonly type: typeof WS_FEED_SEND_MESSAGE
    payload: IWsResp
}

export interface IWsFeedConnect {
    readonly type: typeof WS_FEED_CONNECT
    payload: string
}

export interface IWsFeedDisconect {
    readonly type: typeof WS_FEED_DISCONNECT
}

export type TFeedActions = 
IWsFeedSendMessage | 
IWsFeedConnect | 
IWsFeedDisconect | 
IWsFeedConnectionClosedtAction | 
IWsFeedConnectionStartAction | 
IWsFeedConnectionSuccessAction | 
IWsFeedConnectionErrorAction | 
IWsFeedGetMessageAction;

export type TWsFeedActionTypes = {
    wsConnect: typeof WS_FEED_CONNECT,
    wsDisconect: typeof WS_FEED_DISCONNECT,
  
    wsSendMessage: typeof WS_FEED_SEND_MESSAGE,
    wsConecting: typeof WS_FEED_CONNECTION_SUCCESS,
    onOpen: typeof WS_FEED_CONNECTION_START,
    onClose: typeof WS_FEED_CONNECTION_CLOSED,
    onError: typeof WS_FEED_CONNECTION_ERROR,
    onMessage: typeof WS_FEED_GET_MESSAGE
  
  }



export interface IFeedState {
    wsFeedConnected: boolean;
    feedMessages: IWsResp | undefined;
    feedError: Event | undefined;
}