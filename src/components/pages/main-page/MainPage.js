
import BurgerConstructor from "../../burger-constructor/BurgerConstructor";
import BurgerIngredients from "../../burger-ingredient/BurgerIngredients";
import styles from './main-page.module.css';
export const MainPage = () => {
    return (
        <div className={styles.content}>
            <BurgerIngredients />
            <BurgerConstructor />
        </div>
    )
}