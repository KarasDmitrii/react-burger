import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet, useLocation, } from "react-router-dom";
import { getUserApi } from "../../services/user/UserAction";
import { getUser } from "../../services/user/UserSelectors"
import { readCookie } from '../../services/user/UserServices';


export function ProtectFromUnauth({ element }) {
    const user = useSelector(getUser)
    const dispatch = useDispatch();
    const location = useLocation();
    const token = readCookie('refreshToken');
    if (user.activeUser) {
        
    } else {
        if (token  !== 'undefined') {
            dispatch(getUserApi())
        }
}

    return user.activeUser ? element : <Navigate to='/login' replace state={{from: location}}/>;

}

export function ProtectFromAuth({ element }) {
    const user = useSelector(getUser)
    const dispatch = useDispatch();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/'; 
    const token = readCookie('refreshToken');
    if (user.activeUser) {
        
    } else {
        if (token  !== 'undefined') {
            dispatch(getUserApi())
        }
}

    return user.activeUser ? <Navigate to={fromPage} replace/> : element;

}