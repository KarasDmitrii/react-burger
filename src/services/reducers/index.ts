import { combineReducers } from "redux";
import { сonstructorReducer } from "../Constructor/ConstructorReducer";
import { feedReducer } from "../feed/FeedReducer";
import { ingredientDetailsReducer } from "../IngredientDetails/IngredientDetailsReducer";
import { ingredientsReducer } from "../Ingredients/IngredientsReducer";
import { orderListReducer } from "../order-list/OrderListReducer";

import { orderReducer } from "../Order/OrderReducer";
import { usersReducer } from "../user/UserReducer";


export default combineReducers({
    constructorData: сonstructorReducer,
    data: ingredientsReducer,
    user: usersReducer,
    ordModal: orderReducer,
    ingModal: ingredientDetailsReducer, 
    orderList: orderListReducer,
    feed: feedReducer
})