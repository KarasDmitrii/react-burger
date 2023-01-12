import { combineReducers } from "redux";
import { ConstructorReducer } from "../Constructor/ConstructorReducer";
import { IngredientDetailsReducer } from "../IngredientDetails/IngredientDetailsReducer";
import { IngredientsReducer } from "../Ingredients/IngredientsReducer";
import { OrderReducer } from "../Order/OrderReducer";

export default combineReducers({
    constructorData: ConstructorReducer,
    data: IngredientsReducer,
    ingModal: IngredientDetailsReducer,
    ordModal: OrderReducer, 
})