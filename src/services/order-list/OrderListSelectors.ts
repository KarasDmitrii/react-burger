import { TRootState } from "../.."

export const getOrders = (store: TRootState) => store.orderList.ordersMessages?.orders;