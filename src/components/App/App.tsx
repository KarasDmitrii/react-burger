import { useEffect } from "react";

import styles from './app.module.css';
import '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import { useDispatch } from "react-redux";
import { LoginPage } from "../../pages/login/Login";
import { Profile } from "../../pages/profile/Profile";
import { Registration } from "../../pages/registration/Registration";
import { ForgotPassword } from "../../pages/forgot-password/forgot-password";
import { MainPage } from "../../pages/main-page/MainPage";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import IngredientDetails from "../ingredient-details/IngredientDetails";
import { loadIngredients } from "../../services/Ingredients/IngredientsActions";
import { getUserApi, refreshAccessToken } from "../../services/user/UserAction";
import { readCookie } from "../../services/user/UserServices";
import ProtectedRoute from "../protectedRoutes/ProtectedRoutes";
import { NotFoundPage } from "../../pages/not-found-page/NotFoungPage";
import { Header } from "../Header/AppHeader";
import { ResetPassword } from "../../pages/reset-password/ResetPassword";
import { Modal } from "../modal/Modal";

export const App: React.FC = () => {

  const location = useLocation();
  const token = readCookie('refreshToken');
  const background = location.state && location.state.background;
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(loadIngredients())
    if (token && token !== undefined) {
      dispatch(refreshAccessToken());
      dispatch(getUserApi());
    }

  }, [dispatch]);
  const navigate = useNavigate();
  const closeModal = () => {
    navigate(-1);
  }

  return (

    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes location={background || location}>
          <Route path='/profile' element={
            <ProtectedRoute anonymous={false}>
              <Profile />
            </ProtectedRoute>} />
          <Route path='/login' element={
            <ProtectedRoute anonymous={true}>
              <LoginPage />
            </ProtectedRoute>} />
          <Route path='/register' element={
            <ProtectedRoute anonymous={true}>
              <Registration />
            </ProtectedRoute>} />
          <Route path='/forgot-password' element={
            <ProtectedRoute anonymous={true}>
              <ForgotPassword />
            </ProtectedRoute>} />
          <Route path='/reset-password' element={
            <ProtectedRoute anonymous={true}>
              <ResetPassword />
            </ProtectedRoute>}/>
          <Route path='/' element={<MainPage />} />
          <Route path='/ingredients/:id' element={<IngredientDetails />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        {background && (
          <Routes>
            <Route path='/ingredients/:id' element={
              <Modal modalClose={closeModal}>
                <IngredientDetails />
              </Modal>} />
          </Routes>
        )}
      </main>
    </div>
  );
}