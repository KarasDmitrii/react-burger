import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { initStore } from './services/Store';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App/App';
import { TInitState } from './utils/types';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);


const defaultState: TInitState = {
  data: {
    allData: [],
    buns: [],
    mains: [],
    sauces: [],
    isLoading: false,
    isApiLoad: false,
  },
  constructorData: {
    bun: null,
    otherIng: [],
    order: { "ingredients": [] },
  },
  ordModal: {
    isOrdModalOpen: false,
    orderNum: 0,
    sendOrderError: false,
    isOrdLoading: false
  },
  user: {
    activeUser: false,
    authError: false,
    isResetPasswordSuccess: false,
    isForgotPasswordSuccess: false,
    name: undefined ,
    email: undefined,
    password: undefined,
  },
  ingModal: {
    isIngModalOpen: false,
    item: null,
    header: "Детали ингредиента"
  },
  orderList: {
    wsOrdersConnected: false,
    ordersError: undefined,
    ordersMessages: {
      orders: [],
      total: 0,
      totalToday: 0
  },
  },
  feed: {
    wsFeedConnected: false,
    feedMessages: undefined,
    feedError: undefined,
}

};


const store = initStore(defaultState);

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch




root.render(
  <Router >
    <React.StrictMode>
      <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
          <App />
        </Provider>
      </DndProvider>
    </React.StrictMode>
  </Router>
);

reportWebVitals();
