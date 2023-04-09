import { ingredientDetailsReducer } from './IngredientDetailsReducer';
import { CLOSE_ING_MODAL, OPEN_ING_MODAL } from './IngedientDetailsActions';

describe('IngredientDetailsReducer', () => {
  const initialState = {
    isIngModalOpen: false,
    item: null,
    header: 'Детали ингредиента',
  };
  
  it('should return initial state', () => {
    expect(ingredientDetailsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CLOSE_ING_MODAL', () => {
    const action = { type: CLOSE_ING_MODAL };
    const expectedState = { ...initialState, isIngModalOpen: false };
    expect(ingredientDetailsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle OPEN_ING_MODAL', () => {
    const action = { type: OPEN_ING_MODAL, payload: { name: 'test' } };
    const expectedState = { ...initialState, isIngModalOpen: true, item: { name: 'test' } };
    expect(ingredientDetailsReducer(initialState, action)).toEqual(expectedState);
  });
});
