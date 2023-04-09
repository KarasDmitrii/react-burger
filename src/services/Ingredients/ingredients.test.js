

import { GET_ING_ERROR, GET_ING_LOADING, GET_ING_SUCCESS, loadIngredients } from './IngredientsActions';
import { ingInitialState, ingredientsReducer } from './IngredientsReducer'

describe('ingredientsReducer', () => {

  

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
            ...ingInitialState,
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
        const updatedState = ingredientsReducer(ingInitialState, action);

        expect(updatedState).toEqual(expectedState);
    });

    it('should update state correctly on failed API response', () => {
        const expectedState = {
            ...ingInitialState,
            isLoading: false
        };

        const action = { type: GET_ING_ERROR };
        const updatedState = ingredientsReducer(ingInitialState, action);

        expect(updatedState).toEqual(expectedState);
    });

    it('should update state correctly when API is loading', () => {
        const expectedState = {
            ...ingInitialState,
            isLoading: true
        };

        const action = { type: GET_ING_LOADING};
        const updatedState = ingredientsReducer(ingInitialState, action);

        expect(updatedState).toEqual(expectedState);
    });

    it('should return the same state for unknown action types', () => {
        const expectedState = ingInitialState;

        const action = { type: 'UNKNOWN_ACTION_TYPE' };
        const updatedState = ingredientsReducer(ingInitialState, action);

        expect(updatedState).toEqual(expectedState);
    });
});
