import { CLOSE_ING_MODAL, OPEN_ING_MODAL } from "./IngedientDetailsActions";
import { IIngDetailsInitState, TIngredientDetailsActions } from "./IngredientDetailTypes";


const initialState: IIngDetailsInitState = {
    isIngModalOpen: false,
    item: null,
    header: "Детали ингредиента"
}

export const ingredientDetailsReducer = (state = initialState, action: TIngredientDetailsActions) => {
    switch (action.type) {
        case CLOSE_ING_MODAL:
            return {
                ...state,
                isIngModalOpen: false
            };
        case OPEN_ING_MODAL:
            return {
                ...state,
                isIngModalOpen: true,
                item: action.payload
            };
        default:
            return state;
    }
}