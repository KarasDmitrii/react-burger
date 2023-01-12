
import {
    GET_ING_ERROR,
    GET_ING_LOADING,
    GET_ING_SUCCESS
} from "./IngredientsActions";

const initialState = {

    allData: [],
    buns: [],
    mains: [],
    sauces: [],
    isLoading: false,
    isApiLoad: false,

}

export const IngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ING_SUCCESS:
            return {
                ...state,

                allData: action.payload.data,
                buns: action.payload.data.filter(item => item.type === "bun"),
                mains: action.payload.data.filter(item => item.type === "main"),
                sauces: action.payload.data.filter(item => item.type === "sauce"),
                isApiLoad: true,
                isLoading: false,

            };
        case GET_ING_ERROR:
            return {
                ...state,

                
                isLoading: false

            };
        case GET_ING_LOADING:
            return {
                ...state,

               
                isLoading: true

            };
        default:
            return state;
    }
}