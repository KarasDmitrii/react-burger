import { feedReducer } from './FeedReducer';
import { IFeedState, TFeedActions } from './FeedTypes';
import { 
  WS_FEED_CONNECTION_SUCCESS, 
  WS_FEED_CONNECTION_ERROR, 
  WS_FEED_CONNECTION_CLOSED, 
  WS_FEED_GET_MESSAGE, 
  wsFeedConnect,
  wsFeedDisconnect
} from './FeedActions';

describe('feedReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      wsFeedConnected: false,
      feedError: undefined,
      feedMessages: undefined
    };
  });

  it('should return the initial state', () => {
    const state = feedReducer(undefined, {} );
    expect(state).toEqual(initialState);
  });

  it('should handle WS_FEED_CONNECTION_SUCCESS', () => {
    const action = {
      type: WS_FEED_CONNECTION_SUCCESS
    };
    const state = feedReducer(initialState, action );
    expect(state).toEqual({
      ...initialState,
      wsFeedConnected: true
    });
  });

  it('should handle WS_FEED_CONNECTION_ERROR', () => {
    const action = {
      type: WS_FEED_CONNECTION_ERROR,
      payload: 'Test Error'
    };
    const state = feedReducer(initialState, action );
    expect(state).toEqual({
      ...initialState,
      feedError: 'Test Error',
      wsFeedConnected: false
    });
  });

  it('should handle WS_FEED_CONNECTION_CLOSED', () => {
    const action = {
      type: WS_FEED_CONNECTION_CLOSED
    };
    const state = feedReducer(initialState, action );
    expect(state).toEqual({
      ...initialState,
      wsFeedConnected: false
    });
  });

  it('should handle WS_FEED_GET_MESSAGE', () => {
    const action = {
      type: WS_FEED_GET_MESSAGE,
      payload: ['Test Message']
    };
    const state = feedReducer(initialState, action );
    expect(state).toEqual({
      ...initialState,
      feedMessages: ['Test Message']
    });
  });
});




describe('wsFeedConnect', () => {
  it('should return an object with type WS_FEED_CONNECT and payload equal to the provided url', () => {
    const url = 'https://example.com'
    const expectedAction = {
      type: 'WS_FEED_CONNECT',
      payload: url,
    }
    expect(wsFeedConnect(url)).toEqual(expectedAction)
  })
})

describe('wsFeedDisconnect', () => {
  it('should return an object with type WS_FEED_DISCONNECT and no payload', () => {
    const expectedAction = {
      type: 'WS_FEED_DISCONNECT',
    }
    expect(wsFeedDisconnect()).toEqual(expectedAction)
  })
})
