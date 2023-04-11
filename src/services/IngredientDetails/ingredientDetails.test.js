import { ingDetailsInitialState, ingredientDetailsReducer } from './IngredientDetailsReducer';
import { CLOSE_ING_MODAL, OPEN_ING_MODAL } from './IngedientDetailsActions';

describe('IngredientDetailsReducer', () => {
  
  
  it('should return initial state', () => {
    expect(ingredientDetailsReducer(undefined, {})).toEqual(ingDetailsInitialState);
  });

  it('should handle CLOSE_ING_MODAL', () => {
    const action = { type: CLOSE_ING_MODAL };
    const expectedState = { ...ingDetailsInitialState, isIngModalOpen: false };
    expect(ingredientDetailsReducer(ingDetailsInitialState, action)).toEqual(expectedState);
  });

  it('should handle OPEN_ING_MODAL', () => {
    const action = { type: OPEN_ING_MODAL, payload: { name: 'test' } };
    const expectedState = { ...ingDetailsInitialState, isIngModalOpen: true, item: { name: 'test' } };
    expect(ingredientDetailsReducer(ingDetailsInitialState, action)).toEqual(expectedState);
  });
});
