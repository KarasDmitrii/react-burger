import { useState } from "react";
import { request } from "../../utils/Request";
import { readCookie, setCookie } from "./UserServices";

const API_URL = 'https://norma.nomoreparties.space/api/auth';
const API_URL_RES = 'https://norma.nomoreparties.space/api';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const ADD_USER = 'ADD_USER';
export const PATH_USER = 'PATH_USER';
export const GET_USER = 'GET_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const loginUser = (data) => {
    // const accessToken = 'Bearer ' + readCookie('accessToken').toString();
    return function (dispatch) {
        
        request((`${API_URL}/login`), {
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

    return function (dispatch) {
        request((`${API_URL}/logout`), {
            method: 'POST',
            body: JSON.stringify({
                'token': readCookie('refreshToken')
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            dispatch({
                type: LOG_OUT,
         
            })
            setCookie('accessToken');
            setCookie('refreshToken');
        })


    }

};

export const registerUser = (data) => {
    return function (dispatch) {
        request((`${API_URL}/register`), {
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
        })
    }
}

export const refreshAccessToken = () => {
    const refreshToken = readCookie('refreshToken');
    request((`${API_URL}/token`), {
        method: 'POST',
        body: JSON.stringify({
            'token': refreshToken
        }),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {

        setCookie('refreshToken', res.refreshToken);
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);

    }).catch(err => {
        Promise.reject(`Ошибка обновления токена${err.status}`);
    })
}

export const changeUserData = (newData) => {
    const accessToken = 'Bearer ' + readCookie('accessToken').toString();
    return function (dispatch) {
        request((`${API_URL}/user`), {
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

export const getUserApi = () => {


    return function (dispatch) {
        const accessToken = 'Bearer ' + readCookie('accessToken').toString();
        request((`${API_URL}/user`), {
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

export const forgotPassword = (data) => {
    return function (dispatch) { 
        request((`${API_URL_RES}/password-reset`), {
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

export const resetPassword = (data) => {
    const refreshToken = readCookie('refreshToken');
    return function (dispatch) { 
        request((`${API_URL_RES}/password-reset/reset`), {
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
