
import BurgerConstructor from "../../components/burger-constructor/BurgerConstructor";
import BurgerIngredients from "../../components/burger-ingredient/BurgerIngredients";
import styles from './main-page.module.css';
export const MainPage = () => {
    return (
        <div className={styles.content}>
            <BurgerIngredients />
            <BurgerConstructor />
        </div>
    )
}