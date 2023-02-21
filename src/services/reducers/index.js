import { combineReducers } from "redux";
import { сonstructorReducer } from "../Constructor/ConstructorReducer";
import { ingredientsReducer } from "../Ingredients/IngredientsReducer";
import { orderReducer } from "../Order/OrderReducer";
import { usersReducer } from "../user/UserReducer";

import { constructorReducer } from "../Constructor/ConstructorReducer";
import { ingredientDetailsReducer } from "../IngredientDetails/IngredientDetailsReducer";
import { ingredientsReducer } from "../Ingredients/IngredientsReducer";
import { orderReducer } from "../Order/OrderReducer";

export default combineReducers({
    constructorData: сonstructorReducer,
    data: ingredientsReducer,
    user: usersReducer,
    ordModal: orderReducer
    constructorData: constructorReducer,
    data: ingredientsReducer,
    ingModal: ingredientDetailsReducer,
    ordModal: orderReducer, 
})