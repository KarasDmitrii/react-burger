

import { GET_ING_ERROR, GET_ING_LOADING, GET_ING_SUCCESS, loadIngredients } from './IngredientsActions';
import { ingredientsReducer } from './IngredientsReducer'

describe('ingredientsReducer', () => {

    const initialState = {
        allData: [],
        buns: [],
        mains: [],
        sauces: [],
        isLoading: false,
        isApiLoad: false,
    };

    it('should update state correctly on successful API response', () => {
        const mockPayload = {
            data: [
                {
                    type: 'bun',
                    name: 'Sesame bun'
                },
                {
                    type: 'main',
                    name: 'Beef patty'
                },
                {
                    type: 'sauce',
                    name: 'Ketchup'
                },
            ]
        }

        const expectedState = {
            ...initialState,
            allData: mockPayload.data,
            buns: [{
                type: 'bun',
                name: 'Sesame bun'
            }],
            mains: [{
                type: 'main',
                name: 'Beef patty'
            }],
            sauces: [{
                type: 'sauce',
                name: 'Ketchup'
            }],
            isApiLoad: true,
            isLoading: false
        };

        const action = {
            type: GET_ING_SUCCESS,
            payload: mockPayload
        };
        const updatedState = ingredientsReducer(initialState, action);

        expect(updatedState).toEqual(expectedState);
    });

    it('should update state correctly on failed API response', () => {
        const expectedState = {
            ...initialState,
            isLoading: false
        };

        const action = { type: GET_ING_ERROR };
        const updatedState = ingredientsReducer(initialState, action);

        expect(updatedState).toEqual(expectedState);
    });

    it('should update state correctly when API is loading', () => {
        const expectedState = {
            ...initialState,
            isLoading: true
        };

        const action = { type: GET_ING_LOADING};
        const updatedState = ingredientsReducer(initialState, action);

        expect(updatedState).toEqual(expectedState);
    });

    it('should return the same state for unknown action types', () => {
        const expectedState = initialState;

        const action = { type: 'UNKNOWN_ACTION_TYPE' };
        const updatedState = ingredientsReducer(initialState, action);

        expect(updatedState).toEqual(expectedState);
    });
});
