

import { AppThunk } from '../../hooks/hooks';
import { getApiIngredients } from '../../utils/TrueBurgerApi';

export const GET_ING_SUCCESS: 'LOAD_ING_SUCCESS' = 'LOAD_ING_SUCCESS';
export const GET_ING_ERROR: 'LOAD_ING_ERROR' = 'LOAD_ING_ERROR';
export const GET_ING_LOADING: 'GET_ING_LOADING' = 'GET_ING_LOADING';

export const loadIngredients = (): AppThunk => {
    return function (dispatch) {
        dispatch({ type: GET_ING_LOADING });
        getApiIngredients().then(res => {
           
            dispatch({
                type: GET_ING_SUCCESS,
                payload: res
            })
        }).catch(() => 
            dispatch({
                type: GET_ING_ERROR
             })
             )
    }
};


