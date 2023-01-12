import { useEffect } from "react";
import Header from '../Header/AppHeader';
import BurgerIngredients from '../BurgerIngredient/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import styles from '../Header/AppHeader.module.css';


import '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import { useDispatch, useSelector, useStore } from "react-redux";
import { loadIngredients } from "../../services/Ingredients/IngredientsActions";



function App() {
  const store = useStore();
  const state = store.getState();
  const isSuccess = useSelector(state => state.data.isApiLoad);
  const dispatch = useDispatch();
  
  useEffect(() => {   
    dispatch(loadIngredients())
    
  }, []);
  
  
  return (
    <div className={styles.app}>
      <Header />
       <div className={styles.main}>
        {isSuccess && (
          <>
            <BurgerIngredients  />
            <BurgerConstructor />  
          </>
        )}
      </div> 
    </div>
  );
}

export default App;
//  