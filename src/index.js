import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { initStore } from './services/Store';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
const root = ReactDOM.createRoot(document.getElementById('root'));

const defaultState = {
  data: {
    allData: [],
    buns: [],
    mains: [],
    sauces: [],
    isLoading: false,
    isApiLoad: false,

  },
  constructorData: {
    bun: {},
    otherIng: [],
  },
  ingModal: {
    isIngModalOpen: false,
    item: {},
    header: "Детали ингредиента"
  },
  ordModal: {
    isOrdModalOpen: false,
    orderNum: '034536',
  }

};

const store = initStore(defaultState);
root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <App />
      </Provider>
    </DndProvider>
  </React.StrictMode>
);

reportWebVitals();
