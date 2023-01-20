import { useEffect } from "react";
import { Header } from '../header/AppHeader';
import styles from './app.module.css';
import '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import { useDispatch } from "react-redux";
import { LoginPage } from "../pages/login/Login";
import { Profile } from "../pages/profile/Profile";
import { Registration } from "../pages/registration/Registration";
import { ResetPassword } from "../pages/reset-password/ResetPassword";
import { ForgotPassword } from "../pages/forgot-password/forgot-password";
import { MainPage } from "../pages/main-page/MainPage";
import { Route, Switch, useHistory } from "react-router-dom";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import OrderDetails from "../order-details/OrderDetails";
import { loadIngredients } from "../../services/Ingredients/IngredientsActions";

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadIngredients())

  }, []);
  const history = useHistory();
  const closeModal = e => {
    e.stopPropagation();
    history.goBack();
  }

  return (

    <div className={styles.app}>
      <Header />
      <main className={styles.main}>

        <Switch>
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={Registration} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <Route path='/reset-password' component={ResetPassword} />
          <Route path='/ingredients/:id' >
            <Modal modalClose={closeModal}>
              <IngredientDetails />
            </Modal>
          </Route>
          <Route path='/' component={MainPage} />


        </Switch>

      </main>
    </div>

  );
}


//  