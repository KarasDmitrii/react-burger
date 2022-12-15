import { useMemo, useState } from "react";
import PropTypes from 'prop-types';
import BurgerIngredient from "./BurgerIngredient";
import Modal from "../Modal/Modal";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerIngredients.module.css';
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import ArrPropTypes from '../../utils/PropTypes.jsx';
import { v4 as uuidv4 } from 'uuid';

function BurgerIngredients(props) {
    const bun = useMemo(() => props.arr.filter(item => item.type === "bun"), [props.arr]);
    const sauce = useMemo(() => props.arr.filter(word => word.type === "sauce"), [props.arr]);
    const main = useMemo(() => props.arr.filter(word => word.type === "main"), [props.arr]);

    const [isIngModalOpen, setIsIngModalOpen] = useState(false);
    const [item, setItem] = useState({});
    const [current, setCurrent] = useState('one');

    function openIngModal() {
        setIsIngModalOpen(true);
    }
    function closeIngModal() {
        setIsIngModalOpen(false);
    }


    return (

        <div className={`${styles.box} mb-10 mr-5 `}>
            <div className={`${styles.text} mt-10`}>
                <p className="text text_type_main-large" >
                    Собери бургер
                </p>
            </div>
            <div className={`{styles.verticalMenu} mb-2`} style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    <p className="text text_type_main-default" >
                        Булки
                    </p>
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    <p className="text text_type_main-default" >
                        Начинка
                    </p>
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    <p className="text text_type_main-default" >
                        Соусы
                    </p>
                </Tab>
            </div>
            <div className={`${styles.list} custom-scroll`} >
                <div className={styles.typeName} key={uuidv4()}>
                    <p className="text text_type_main-medium" >
                        Булки
                    </p>
                </div>
                <div className={styles.typeBox} key={uuidv4()}>
                    {bun.map((item) => <BurgerIngredient item={item} setItem={setItem} openModal={openIngModal} key={uuidv4()} id={uuidv4()}/>)}
                </div>
                <div className={styles.typeName} key={uuidv4()}>
                    <p className="text text_type_main-medium" >
                        Соусы
                    </p>
                </div>
                <div className={styles.typeBox} key={uuidv4()}>
                    {sauce.map((item) => <BurgerIngredient item={item} setItem={setItem} openModal={openIngModal} key={uuidv4()} id={uuidv4()}/>)}
                </div>
                <div className={styles.typeName} key={uuidv4()}>
                    <p className="text text_type_main-medium" >
                        Начинка
                    </p>
                </div>
                <div className={styles.typeBox} key={uuidv4()}>
                    {main.map((item) =>( <BurgerIngredient item={item} setItem={setItem} openModal={openIngModal} key={uuidv4()} id={uuidv4()}/>))}
                </div>
                
            </div>
            {isIngModalOpen && (
                    <Modal onClose={closeIngModal} >
                        <IngredientDetails ingredientData={item} onClose={closeIngModal} header="Детали ингредиента" />
                    </Modal>)}
        </div>
    )
};
BurgerIngredients.propTypes = {
    arr: PropTypes.arrayOf(ArrPropTypes.isRequired).isRequired,
 
}

export default BurgerIngredients;
