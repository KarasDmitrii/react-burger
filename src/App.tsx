import React, { useEffect, useState } from "react";
import Header from './components/Header/AppHeader';
import Menu from './components/BurgerIngredient/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor.jsx';
import './components/Header/AppHeader.css';
import './components/BurgerIngredient/BurgerIngredients.css';
import './components/BurgerConstructor/BurgerConstructor.css';
import '../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '../src/components/Modal/Modal.css';
const url='https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
          
        } else {
        return Promise.reject('Ошибка ${res.status}');
        }
      })
      .then((obj) => {       
        return setState(obj.data);
      
      })
      .catch(e => {console.log(e);})

  })
  
  return (
    <div className='app'>     
      <Header/>
      <div className='main'>
        <Menu arr={state} />
        <BurgerConstructor arr={state}/>
      </div>
    </div>
  );
}

export default App;
