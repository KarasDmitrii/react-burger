import styles from './main-page.module.css';
import BurgerConstructor from "../../burger-constructor/BurgerConstructor";
import BurgerIngredients from "../../burger-ingredient/BurgerIngredients";

export const MainPage = () => {
    return (

        <>

            <BurgerIngredients />
            <BurgerConstructor />

        </>

    )
}