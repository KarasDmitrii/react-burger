import { TRootState } from "../..";


export const getUser = (store: TRootState) => store.user;
export const getIsResetPass = (store: TRootState) => store.user.isResetPasswordSuccess;
export const getIsForgotPass = (store: TRootState) => store.user.isForgotPasswordSuccess;