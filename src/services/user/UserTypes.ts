import { REPL_MODE_STRICT } from "repl";
import { ADD_USER, AUTH_ERROR, FORGOT_PASSWORD, LOG_OUT, PATH_USER, REFRESH_TOKEN, RESET_PASSWORD } from "./UserAction";

type TRegisterPromis = {
    email: string | undefined,
    name: string | undefined
}

export interface IAddUserAction {
    readonly type: typeof ADD_USER,
    payload: { user?: TRegisterPromis, password?: string  }
}

export interface IPathUserAction {
    readonly type: typeof PATH_USER,
    payload: { name: string | undefined, email: string | undefined}
}

export interface ILogoutUserAction {
    readonly type: typeof LOG_OUT
}

export interface IAuthUserAction {
    readonly type: typeof AUTH_ERROR
}

export interface IResetPasswordAction {
    readonly type: typeof RESET_PASSWORD
}

export interface IForgotAction {
    readonly type: typeof FORGOT_PASSWORD
}

export interface IRefreshTokenAction {
    readonly type: typeof REFRESH_TOKEN
}

export interface IUserInitState {
    activeUser: boolean,
    authError: boolean,
    isResetPasswordSuccess: boolean,
    isForgotPasswordSuccess: boolean,
    name: undefined| string,
    email: undefined | string,
    password: undefined | string
}

export type TUserActions =
    IAddUserAction |
    IAuthUserAction |
    IForgotAction |
    ILogoutUserAction |
    IRefreshTokenAction |
    IPathUserAction |
    IResetPasswordAction;