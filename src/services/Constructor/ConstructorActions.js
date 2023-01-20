import { sendOrderApi } from "../../utils/TrueBurgerApi";

export const ADD_ITEM = 'ADD_ITEM';
export const ADD_BUN = 'ADD_BUN';
export const DELETE_ITEM = 'DELETE_ITEM';
export const MOVE_CARD = 'MOVE_ITEM';


export const addItem = (item) => {
    if (item.type === 'bun') {
    return {
        type: ADD_BUN,
        payload: item
    };} else {
        return {
            type: ADD_ITEM,
            payload: { item: item, key: crypto.randomUUID() }
        }
    }
}
