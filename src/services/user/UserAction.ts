import PropTypes from 'prop-types';
import { request } from "../../utils/Request";
import { API_URL } from '../../utils/TrueBurgerApi';
import { readCookie, setCookie } from "./UserServices";

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const ADD_USER = 'ADD_USER';
export const PATH_USER = 'PATH_USER';
export const GET_USER = 'GET_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const REFRESH_TOKEN = 'REFRESH_TOKEN'; 

interface ILogiData {
    'email': string | undefined,
    'password': string | undefined
}
interface IUserData extends ILogiData {
    'name': string | undefined
}
interface IResetPassData {
    'password': string | undefined,
    'token': string | undefined
}

export const loginUser = (data: ILogiData) => {
    return function (dispatch: any) {
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
            setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
            setCookie('refreshToken', res.refreshToken);
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

export const logoutUser = () => {

    return function (dispatch: any) {
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
            setCookie('accessToken', '', {expires: -1});
            setCookie('refreshToken', '', {expires: -1});
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

export const registerUser = (data: IUserData) => {
    return function (dispatch: any) {
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
            setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
            setCookie('refreshToken', res.refreshToken);
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

export const refreshAccessToken = (): any => {
    return function (dispatch: any) {
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
            setCookie('refreshToken', res.refreshToken);
            setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        }).catch(err => {
            Promise.reject(`Ошибка обновления токена${err}`);

        })
    }
}

export const changeUserData = (newData: IUserData) => {
    return function (dispatch: any) {
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

export const getUserApi = (): any => {
    return function (dispatch: any) {
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

export const forgotPassword = (data: {'email': string | undefined}) => {
    return function (dispatch: any) {
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

export const resetPassword = (data: IResetPassData) => {
    return function (dispatch: any) {
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

