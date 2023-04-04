import { TRootState } from "../..";

export const getOrders = (store: TRootState) => store.feed.feedMessages?.orders;
export const getTotal = (store: TRootState) => store.feed.feedMessages?.total;
export const getTotalToday = (store: TRootState) => store.feed.feedMessages?.totalToday;
export const getIsWsFeedConnected = (store: TRootState) => store.feed.wsFeedConnected;