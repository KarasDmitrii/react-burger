
import { Dispatch } from "redux"
import { IConstructorInitialState, TConstructorActions } from "../services/Constructor/ConstructorTypes"
import { IFeedState, TFeedActions } from "../services/feed/FeedTypes"
import { IIngDetailsInitState, TIngredientDetailsActions } from "../services/IngredientDetails/IngredientDetailTypes"
import { IIngredientsInitState, TIngredientsActions } from "../services/Ingredients/IngredientsTypes"
import { IOrderListState, TOrderListActions } from "../services/order-list/OrderListTypes"
import { IOrderInitState, TOrderActions } from "../services/Order/OrderTypes"
import { IUserInitState, TUserActions } from "../services/user/UserTypes"

export interface IIngredient {
    _id: string,
    name: string,
    type: string,
    fat: string,
    carbohydrates: string,
    proteins: string,
    calories: string,
    price: string,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number
}

export interface IIngWithKey {
    key: string,
    item: IIngredient
}

export interface ILocation {
    hash: string,
    key: string,
    pathname: string,
    search: string,
    state: object | null

}

export interface IPromise {
    "success": boolean,
    "data"?: Array<IIngredient>,
    "message"?: string,
    "accessToken"?: string,
    "refreshToken"?: string,
    "user"?: { "email": string, "name": string },
    "status": number,
    name: string,
    order: { number: number }
}

export interface IUser {
    name?: string,
    email?: string,
    password?: string,
    activeUser: boolean,
    authError: boolean,
    isResetPasswordSuccess: boolean,
    isForgotPasswordSuccess: boolean,
}

export type TInitState = {
    constructorData: IConstructorInitialState,
    data: IIngredientsInitState,
    user: IUserInitState,
    ordModal: IOrderInitState,
    ingModal: IIngDetailsInitState,
    orderList: IOrderListState,
    feed: IFeedState
    
}


export type TApplicationActions = TFeedActions | TOrderListActions | TConstructorActions | TIngredientDetailsActions | TIngredientsActions | TOrderActions | TUserActions; //!!!!!

export type AppDispatch = Dispatch<TApplicationActions>;

export type TWsRespOrder = {
    ingredients: Array<string>,
    _id: string,
    name: string
    status: string,
    number: number,
    createdAt: string,
    updatedAt: string
}

export interface IWsResp {
    orders: TWsRespOrder[],
    total: number,
    totalToday: number
}

// export type TAppThunk<TReturn = void> = ActionCreator<
//   ThunkAction<TReturn, Action, TRootState, TApplicationActions>
// >; 
// export type AppDispatch = ThunkDispatch<TRootState, never, TApplicationActions>;

// export type TAppThunk<TReturn = void> = ActionCreator<
//   ThunkAction<Promise<TReturn>, TRootState, never, TApplicationActions>
// >;
// export type TAppThunk<TReturn = void> = ActionCreator<
//   ThunkAction<TReturn, Action, TRootState, TApplicationActions>
// >; 
// export const useAppDispatch = () => useDispatch<AppDispatch>()

export const nullIngredientWithKey: IIngredient = {
    _id: '',
    name: '',
    type: '',
    fat: '',
    carbohydrates: '',
    proteins: '',
    calories: '',
    price: '',
    image: '',
    image_mobile: '',
    image_large: '',
    __v: 0
}

