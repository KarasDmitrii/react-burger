
import { Middleware } from "redux";
import { TRootState } from "../..";
import { AppDispatch } from "../../utils/types";
import { TWsFeedActionTypes } from "../feed/FeedTypes";
import { TWsOrdersActionTypes } from "../order-list/OrderListTypes";




export const socketMiddleware: (wsActions: TWsOrdersActionTypes | TWsFeedActionTypes) => Middleware = (wsActions: TWsOrdersActionTypes | TWsFeedActionTypes): Middleware<AppDispatch, TRootState> => {

  return store => {
    let socket: WebSocket | null = null;
    let isConnected = false;
    let url = "";
    let reconnectTimer = 0;
    return next => action => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const {
        wsConnect,
        wsDisconect,
        wsSendMessage,
        onClose,
        onOpen,
        onError,
        onMessage,
        wsConecting } = wsActions;

      const user = getState().user

      if (type === wsConnect && user) {
        socket = new WebSocket(payload);
        url = payload
        isConnected = true;
        dispatch({ type: wsConecting })
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = event => {
          if (event.code !== 1000) {
            dispatch({
              type: onError,
              payload: event
            })
          }
          // if (isConnected) {
          //   dispatch({ type: wsConecting });
          //   reconnectTimer = window.setTimeout(() => {
          //     dispatch({
          //       type: wsConnect,
          //       payload: url
          //     });
          //   }, 3000);
          // }
          dispatch({ type: onClose });
        };

        if (type === wsSendMessage) {
          socket.send(JSON.stringify(payload))
        }

        if (type === wsDisconect) {
          // clearTimeout(reconnectTimer);
          // isConnected = false,
          // reconnectTimer = 0;
          socket.close()
          socket = null;
          dispatch({
            type: onClose
          })
        }
      }

      next(action);
    };
  };
};