export const WS_FEED_CONNECTION_START: 'WS_FEED_CONNECTION_START' = 'WS_FEED_CONNECTION_START';
export const WS_FEED_CONNECTION_SUCCESS: 'WS_FEED_CONNECTION_SUCCESS' = 'WS_FEED_CONNECTION_SUCCESS';
export const WS_FEED_CONNECTION_ERROR: 'WS_FEED_CONNECTION_ERROR' = 'WS_FEED_CONNECTION_ERROR';
export const WS_FEED_CONNECTION_CLOSED: 'WS_FEED_CONNECTION_CLOSED' = 'WS_FEED_CONNECTION_CLOSED';
export const WS_FEED_GET_MESSAGE: 'WS_FEED_GET_MESSAGE' = 'WS_FEED_GET_MESSAGE';
export const WS_FEED_SEND_MESSAGE: 'WS_FEED_SEND_MESSAGE' = 'WS_FEED_SEND_MESSAGE';

export const WS_FEED_CONNECT: 'WS_FEED_CONNECT' = 'WS_FEED_CONNECT';
export const WS_FEED_DISCONNECT: 'WS_FEED_DISCONNECT' = 'WS_FEED_DISCONNECT';


export const feedActions = {
  wsConnect: WS_FEED_CONNECT,
  wsDisconect: WS_FEED_DISCONNECT,

  wsSendMessage: WS_FEED_SEND_MESSAGE,
  wsConecting: WS_FEED_CONNECTION_SUCCESS,
  onOpen: WS_FEED_CONNECTION_START,
  onClose: WS_FEED_CONNECTION_CLOSED,
  onError: WS_FEED_CONNECTION_ERROR, 
  onMessage: WS_FEED_GET_MESSAGE
}

export const wsFeedConnect = (url: string) => {
  return {
    type: WS_FEED_CONNECT,
    payload: url
  }
}

export const wsFeedDisconnect = () => {
  return {
    type: WS_FEED_DISCONNECT,
    
  }
}