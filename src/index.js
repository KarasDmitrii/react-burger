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
import { loadIngredients } from './services/Ingredients/IngredientsActions';




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
    activeUser: false,
    otherIng: [],
    order: { "ingredients": [] },
  },
  ordModal: {
    isOrdModalOpen: false,
    orderNum: 0,
    sendOrderError: false
  }

};


const store = initStore(defaultState);
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
