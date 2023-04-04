import { TRootState } from "../..";


export const getIsLoggedIn = (store: TRootState) => store.user.activeUser;
export const getIsAuthChecked = (store: TRootState) => store.user.isAutnChecked;