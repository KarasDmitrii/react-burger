import { orderReducer } from './OrderReducer';


describe('orderReducer', () => {
  const initialState = {
    isOrdModalOpen: false,
    isOrdLoading: false,
    orderNum: 0,
    sendOrderError: false,
  };

  it('should return the initial state', () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CLOSE_ORDER_MODAL', () => {
    const action = { type: 'CLOSE_ORDER_MODAL' };
    const expectedState = { ...initialState, isOrdModalOpen: false };
    expect(orderReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SEND_ORDER_SUCCESS', () => {
    const action = {
      type: 'SEND_ORDER_SUCCESS',
      payload: { order: { number: 1234 } },
    };

    const expectedState = {
      ...initialState,
      isOrdLoading: false,
      isOrdModalOpen: true,
      orderNum: action.payload.order.number,
    };

    expect(orderReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SEND_ORDER_ERROR', () => {
    const action = { type: 'SEND_ORDER_ERROR' };
    const expectedState = { ...initialState, sendOrderError: true };
    expect(orderReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ORD_LOADING', () => {
    const action = { type: 'ORD_LOADING' };
    const expectedState = {
      ...initialState,
      isOrdModalOpen: true,
      isOrdLoading: true,
    };
    expect(orderReducer(initialState, action)).toEqual(expectedState);
  });

  it('should return the current state if an unknown action is given', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    expect(orderReducer(initialState, action)).toEqual(initialState);
  });
});



