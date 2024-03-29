import { IIngWithKey, IIngredient } from "../../utils/types";

export const ADD_ITEM: 'ADD_ITEM' = 'ADD_ITEM';
export const ADD_BUN: 'ADD_BUN' = 'ADD_BUN';
export const DELETE_ITEM: 'DELETE_ITEM' = 'DELETE_ITEM';
export const MOVE_CARD: 'MOVE_ITEM' = 'MOVE_ITEM';
export const COMPOSE_ORDER: 'COMPOSE_ORDER' = 'COMPOSE_ORDER';
export const addItem = (item: IIngWithKey) => {
   
    if (item.item.type === 'bun') {
    return {
        type: ADD_BUN,
        payload: item
    };} else {
        return {
            type: ADD_ITEM,
            payload: item
        }
    }
}
