import { IIngredient } from "../../utils/types";
import { CLOSE_ING_MODAL, OPEN_ING_MODAL } from "./IngedientDetailsActions";

export interface ICloseIngModalAction {
    readonly type: typeof CLOSE_ING_MODAL
}
export interface IOpenModalAction {
    readonly type: typeof OPEN_ING_MODAL,
    payload: IIngredient
}

export type TIngredientDetailsActions = 
ICloseIngModalAction |
IOpenModalAction;

export interface IIngDetailsInitState {
    isIngModalOpen: boolean,
    item: null | IIngredient,
    readonly header: string
}