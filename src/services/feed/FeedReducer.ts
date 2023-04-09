import { 
    WS_FEED_CONNECTION_CLOSED, 
    WS_FEED_CONNECTION_ERROR, 
    WS_FEED_CONNECTION_SUCCESS, 
    WS_FEED_GET_MESSAGE 
} from './FeedActions';
import { IFeedState, TFeedActions } from './FeedTypes';

export const feedInitialState: IFeedState = {
    wsFeedConnected: false,
    feedError: undefined,
    feedMessages: undefined
};

export const feedReducer = (state = feedInitialState, action: TFeedActions ): IFeedState => {
    switch (action.type) {
    
        case WS_FEED_CONNECTION_SUCCESS:
            return {
                ...state,
                feedError: undefined,
                wsFeedConnected: true
            };

        case WS_FEED_CONNECTION_ERROR:
            return {
                ...state,
                feedError: action.payload,
                wsFeedConnected: false
            };

        case WS_FEED_CONNECTION_CLOSED:
            return {
                ...state,
                feedError: undefined,
                wsFeedConnected: false
            };

        case WS_FEED_GET_MESSAGE:
            return {
                ...state,
                feedError: undefined,
                feedMessages: action.payload
            };
        default:
            return state;
    }
}; 