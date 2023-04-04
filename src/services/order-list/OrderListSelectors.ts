import { TRootState } from "../.."

export const getOrders = (store: TRootState) => store.orderList.ordersMessages?.orders;
export const getIsWsOrdersConnected = (store: TRootState) => store.orderList.wsOrdersConnected;