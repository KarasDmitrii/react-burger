import { feedInitialState, feedReducer } from './FeedReducer';
import { 
  WS_FEED_CONNECTION_SUCCESS, 
  WS_FEED_CONNECTION_ERROR, 
  WS_FEED_CONNECTION_CLOSED, 
  WS_FEED_GET_MESSAGE, 
  wsFeedConnect,
  wsFeedDisconnect
} from './FeedActions';

describe('feedReducer', () => {
  

  beforeEach(() => {
    
  });

  it('should return the initial state', () => {
    const state = feedReducer(undefined, {} );
    expect(state).toEqual(feedInitialState);
  });

  it('should handle WS_FEED_CONNECTION_SUCCESS', () => {
    const action = {
      type: WS_FEED_CONNECTION_SUCCESS
    };
    const state = feedReducer(feedInitialState, action );
    expect(state).toEqual({
      ...feedInitialState,
      wsFeedConnected: true
    });
  });

  it('should handle WS_FEED_CONNECTION_ERROR', () => {
    const action = {
      type: WS_FEED_CONNECTION_ERROR,
      payload: 'Test Error'
    };
    const state = feedReducer(feedInitialState, action );
    expect(state).toEqual({
      ...feedInitialState,
      feedError: 'Test Error',
      wsFeedConnected: false
    });
  });

  it('should handle WS_FEED_CONNECTION_CLOSED', () => {
    const action = {
      type: WS_FEED_CONNECTION_CLOSED
    };
    const state = feedReducer(feedInitialState, action );
    expect(state).toEqual({
      ...feedInitialState,
      wsFeedConnected: false
    });
  });

  it('should handle WS_FEED_GET_MESSAGE', () => {
    const action = {
      type: WS_FEED_GET_MESSAGE,
      payload: ['Test Message']
    };
    const state = feedReducer(feedInitialState, action );
    expect(state).toEqual({
      ...feedInitialState,
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
