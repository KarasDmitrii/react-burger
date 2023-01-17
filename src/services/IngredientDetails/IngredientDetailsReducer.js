import {
    OPEN_ING_MODAL,
    CLOSE_ING_MODAL
} from "./IngredientDetailsActions";

const initialState = {

    isIngModalOpen: false,
    item: {},
    header: "Детали ингредиента"

}

export const ingredientDetailsReducer = (state = initialState, action) => {
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