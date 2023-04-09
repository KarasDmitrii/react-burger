import { orderInitialState, orderReducer } from './OrderReducer';


describe('orderReducer', () => {


  it('should return the initial state', () => {
    expect(orderReducer(undefined, {})).toEqual(orderInitialState);
  });

  it('should handle CLOSE_ORDER_MODAL', () => {
    const action = { type: 'CLOSE_ORDER_MODAL' };
    const expectedState = { ...orderInitialState, isOrdModalOpen: false };
    expect(orderReducer(orderInitialState, action)).toEqual(expectedState);
  });

  it('should handle SEND_ORDER_SUCCESS', () => {
    const action = {
      type: 'SEND_ORDER_SUCCESS',
      payload: { order: { number: 1234 } },
    };

    const expectedState = {
      ...orderInitialState,
      isOrdLoading: false,
      isOrdModalOpen: true,
      orderNum: action.payload.order.number,
    };

    expect(orderReducer(orderInitialState, action)).toEqual(expectedState);
  });

  it('should handle SEND_ORDER_ERROR', () => {
    const action = { type: 'SEND_ORDER_ERROR' };
    const expectedState = { ...orderInitialState, sendOrderError: true };
    expect(orderReducer(orderInitialState, action)).toEqual(expectedState);
  });

  it('should handle ORD_LOADING', () => {
    const action = { type: 'ORD_LOADING' };
    const expectedState = {
      ...orderInitialState,
      isOrdModalOpen: true,
      isOrdLoading: true,
    };
    expect(orderReducer(orderInitialState, action)).toEqual(expectedState);
  });

  it('should return the current state if an unknown action is given', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    expect(orderReducer(orderInitialState, action)).toEqual(orderInitialState);
  });
});



