import { combineReducers } from "redux";
import { сonstructorReducer } from "../Constructor/ConstructorReducer";
import { ingredientsReducer } from "../Ingredients/IngredientsReducer";
import { orderReducer } from "../Order/OrderReducer";
import { usersReducer } from "../user/UserReducer";


export default combineReducers({
    constructorData: сonstructorReducer,
    data: ingredientsReducer,
    user: usersReducer,
    ordModal: orderReducer
})