import { IIngredient, IPromise } from "../../utils/types";
import { GET_ING_ERROR, GET_ING_LOADING, GET_ING_SUCCESS } from "./IngredientsActions";

export interface IGetIngSuccessAction {
    readonly type: typeof GET_ING_SUCCESS,
    payload: IPromise 
}

export interface IGetIngErrorAction {
    readonly type: typeof GET_ING_ERROR
}

export interface IGetIngLoadingAction {
    readonly type: typeof GET_ING_LOADING
}

export interface IIngredientsInitState {
    allData: Array<IIngredient> | [],
    buns: Array<IIngredient> | [],
    mains: Array<IIngredient> | [],
    sauces: Array<IIngredient> | [],
    isLoading: boolean,
    isApiLoad: boolean,
}

export type TIngredientsActions = 
IGetIngErrorAction |
IGetIngLoadingAction |
IGetIngSuccessAction;