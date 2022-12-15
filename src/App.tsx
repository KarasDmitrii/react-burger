import { useEffect, useState } from "react";
import Header from './components/Header/AppHeader';
import BurgerIngredients from './components/BurgerIngredient/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor.jsx';
import styles from './components/Header/AppHeader.module.css';
import GetIngredients from "./utils/BurgerApi";

import '../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';



function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    GetIngredients({setState});
    
  }, []);
  
  // const data = GetIngredients();
   
  return (
    <div className={styles.app}>     
      <Header/>
      <div className={styles.main}>
        <BurgerIngredients arr={state} />
        <BurgerConstructor arr={state}/>
      </div>
    </div>
  );
}

export default App;
