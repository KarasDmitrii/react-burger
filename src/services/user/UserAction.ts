

import { TAppDispatch } from "../..";
import { AppThunk } from "../../hooks/hooks";
import { request } from "../../utils/Request";
import { API_URL } from '../../utils/TrueBurgerApi';
import { AppDispatch } from "../../utils/types";
import { getUser } from "./UserSelectors";

import { deleteCookie, readCookie, setCookie } from "./UserServices";

export const LOG_IN: 'LOG_IN' = 'LOG_IN';
export const LOG_OUT: 'LOG_OUT' = 'LOG_OUT';
export const ADD_USER: 'ADD_USER' = 'ADD_USER';
export const PATH_USER: 'PATH_USER' = 'PATH_USER';
export const GET_USER: 'GET_USER' = 'GET_USER';
export const AUTH_ERROR: 'AUTH_ERROR' = 'AUTH_ERROR';
export const RESET_PASSWORD: 'RESET_PASSWORD' = 'RESET_PASSWORD';
export const FORGOT_PASSWORD: 'FORGOT_PASSWORD' = 'FORGOT_PASSWORD';
export const REFRESH_TOKEN: 'REFRESH_TOKEN' = 'REFRESH_TOKEN';
export const AUTH_CHECKED: 'AUTH_CHECKED' = 'AUTH_CHECKED';

interface ILogiData {
    email: string | undefined,
    password: string | undefined
}
interface IUserData {
    name: string | undefined,
    password: string | undefined,
    email: string | undefined
}
interface IResetPassData {
    password: string | undefined,
    token: string | undefined
}

export const checkUserAuth = (): AppThunk => {
    return function (dispatch: AppDispatch) {
        if (readCookie("accessToken")) {

            const accessToken = 'Bearer ' + readCookie('accessToken')?.toString();
            request((`${API_URL}/auth/user`), {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'authorization': accessToken }
            }).then(res => {
                dispatch({
                    type: ADD_USER,
                    payload: {
                        user: res.user,
                    }
                })
            }).catch(err => {
                if (err.status === 401) {
                    refreshAccessToken()
                }
            }).finally(() => {
                dispatch({ type: AUTH_CHECKED })
            })

        } else {
            dispatch({ type: AUTH_CHECKED })
        }
    }
}

export const loginUser = (data: ILogiData): AppThunk => {

    return function (dispatch: AppDispatch) {
        request((`${API_URL}/auth/login`), {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            if (res.status === 401) {
                dispatch({
                    type: AUTH_ERROR
                })
                alert('Неверный email или пароль')
            }
            dispatch({
                type: ADD_USER,
                payload: {
                    user: res.user,
                    password: data.password
                }
            })

            
            if (res.accessToken) setCookie('accessToken', res.accessToken?.split('Bearer ')[1]);
            if (res.refreshToken) setCookie('refreshToken', res.refreshToken);

        }).catch(err => {
            console.log(err)
            if (err.status === 401) {
                dispatch({
                    type: AUTH_ERROR
                })
            }
        })
    }
};

export const logoutUser = (): AppThunk => {

    return function (dispatch: AppDispatch) {
        request((`${API_URL}/auth/logout`), {
            method: 'POST',
            body: JSON.stringify({
                'token': readCookie('refreshToken')
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => {
            dispatch({
                type: LOG_OUT,
            })
            deleteCookie('accessToken');
            deleteCookie('refreshToken');
        }).catch(err => {
            console.log(err)
            if (err.status === 401) {
                dispatch({
                    type: AUTH_ERROR
                })
            }
        })
    }
};

export const registerUser = (data: IUserData): AppThunk => {
    return function (dispatch: AppDispatch) {
        request((`${API_URL}/auth/register`), {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            dispatch({
                type: ADD_USER,
                payload: {
                    user: res.user,
                    password: data.password
                }
            })
            if (res.accessToken) setCookie('accessToken', res.accessToken?.split('Bearer ')[1] );
            if (res.refreshToken) setCookie('refreshToken', res.refreshToken);
        }).catch(err => {
            Promise.reject(`Ошибка регистрации${err}`);
            alert('Ошибка регистрации')
            if (err.status === 401) {
                dispatch({
                    type: AUTH_ERROR
                })
            }
        })
    }
}

export const refreshAccessToken = (): AppThunk => {
    return function (dispatch: AppDispatch) {
        const refreshToken = readCookie('refreshToken');
        request((`${API_URL}/auth/token`), {
            method: 'POST',
            body: JSON.stringify({
                'token': refreshToken
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            dispatch({
                type: REFRESH_TOKEN
            })
            if (res.accessToken) setCookie('accessToken', res.accessToken?.split('Bearer ')[1]);
            if (res.refreshToken) setCookie('refreshToken', res.refreshToken);
        }).catch(err => {
            Promise.reject(`Ошибка обновления токена${err}`);

        })
    }
}

export const changeUserData = (newData: IUserData): AppThunk => {
    return function (dispatch: AppDispatch) {
        const accessToken = 'Bearer ' + readCookie('accessToken')?.toString();
        request((`${API_URL}/auth/user`), {
            method: 'PATCH',
            body: JSON.stringify(newData),
            headers: { 'Content-Type': 'application/json', 'authorization': accessToken }
        }).then(() => {
            dispatch({
                type: PATH_USER,
                payload: newData
            })
        })
    }
}

export const getUserApi = (): AppThunk => {
    return async function (dispatch: AppDispatch) {
        const accessToken = 'Bearer ' + readCookie('accessToken')?.toString();
        request((`${API_URL}/auth/user`), {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'authorization': accessToken }
        }).then(res => {
            dispatch({
                type: ADD_USER,
                payload: {
                    user: res.user,
                }
            })
        }).catch(err => {
            if (err.status === 401) {
                refreshAccessToken()
            }
        })
    }
};

export const forgotPassword = (data: { email: string | undefined }): AppThunk => {
    return function (dispatch: AppDispatch) {
        request((`${API_URL}/password-reset`), {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            if (res.status === 401) {
                dispatch({
                    type: AUTH_ERROR
                })
                alert('Неверный email')
            }
            if (res.success) {
                dispatch({
                    type: FORGOT_PASSWORD
                })
            }
        })
    }
};

export const resetPassword = (data: IResetPassData): AppThunk => {
    return function (dispatch: TAppDispatch) {
        request((`${API_URL}/password-reset/reset`), {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            if (res.status === 401) {
                dispatch({
                    type: AUTH_ERROR
                })
                alert('Неверный код')
            }
            if (res.success) {
                dispatch({
                    type: RESET_PASSWORD
                })
            }
        })
    }
};

