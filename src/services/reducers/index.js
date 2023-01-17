import { combineReducers } from "redux";
import { constructorReducer } from "../Constructor/ConstructorReducer";
import { ingredientDetailsReducer } from "../IngredientDetails/IngredientDetailsReducer";
import { ingredientsReducer } from "../Ingredients/IngredientsReducer";
import { orderReducer } from "../Order/OrderReducer";

export default combineReducers({
    constructorData: constructorReducer,
    data: ingredientsReducer,
    ingModal: ingredientDetailsReducer,
    ordModal: orderReducer, 
})