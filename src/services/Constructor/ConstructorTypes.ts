import { IIngredient, IIngWithKey } from "../../utils/types";
import { ADD_BUN, ADD_ITEM, COMPOSE_ORDER, DELETE_ITEM, MOVE_CARD } from "./ConstructorActions";

export interface IAddItemAction {
    readonly type: typeof ADD_ITEM,
    payload: IIngWithKey
}

export interface IAddBunAction {
    readonly type: typeof ADD_BUN,
    payload: IIngWithKey
}
    
export interface IDeleteItemAction {
    readonly type: typeof DELETE_ITEM,
    payload: string
}

export interface IMoveCardAction {
    readonly type: typeof MOVE_CARD,
    dragIndex: number,
    hoverIndex: number
}
    
export interface IComposeOrderAction {
    readonly type: typeof COMPOSE_ORDER
}

export type TConstructorActions = 
IAddBunAction | 
IAddItemAction | 
IComposeOrderAction | 
IDeleteItemAction |
IMoveCardAction;

export interface IConstructorInitialState {
    bun: IIngredient | null,
    otherIng: Array<IIngWithKey>,
    order: {"ingredients": Array<string>}
}
