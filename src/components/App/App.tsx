import { useEffect, useState } from "react";
import Header from '../Header/AppHeader';
import BurgerIngredients from '../BurgerIngredient/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import styles from '../Header/AppHeader.module.css';
import GetIngredients from "../../utils/BurgerApi";

import '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';



function App() {
  const [state, setState] = useState({
    isDone: false,
    data: []});
  useEffect(() => {
    GetIngredients({setState});
    
  }, []);
  
   
  return (
    <div className={styles.app}>     
      <Header/>
      <div className={styles.main}>
        {state.isDone && (
          <>
            <BurgerIngredients arr={state.data} />
            <BurgerConstructor arr={state.data}/>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
