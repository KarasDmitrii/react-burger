import { useEffect } from "react";
import Header from '../Header/AppHeader';
import BurgerIngredients from '../BurgerIngredient/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import styles from './App.module.css';


import '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import { useDispatch, useSelector } from "react-redux";
import { loadIngredients } from "../../services/Ingredients/IngredientsActions";



function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {   
    dispatch(loadIngredients())
    
  }, []);
  
  
  return (
    <div className={styles.app}>
      <Header />
       <div className={styles.content}>
          <>
            <BurgerIngredients  />
            <BurgerConstructor />  
          </> 
      </div> 
    </div>
  );
}

export default App;
//  