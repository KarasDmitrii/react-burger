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
    bun: {
      _id: '60d3b41abdacab0026a733c6',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
      __v: 0
    },
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
