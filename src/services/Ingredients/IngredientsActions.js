
import { GetApiIngredients } from '../../utils/TrueBurgerApi.js';
export const GET_ING_SUCCESS = 'LOAD_ING_SUCCESS';
export const GET_ING_ERROR = 'LOAD_ING_ERROR';
export const GET_ING_LOADING = 'GET_ING_LOADING';


export function loadIngredients() {
    return function (dispatch) {
        dispatch({type: GET_ING_LOADING});
        GetApiIngredients().then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_ING_SUCCESS,
                    payload: res
                })
            } else {
                dispatch({
                    type: GET_ING_ERROR
                })
            }
        })
    }
};


