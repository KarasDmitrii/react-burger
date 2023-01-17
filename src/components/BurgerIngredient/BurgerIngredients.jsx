import { useEffect, useState, useRef } from "react";
import BurgerIngredient from "./BurgerIngredient";
import Modal from "../Modal/Modal";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerIngredients.module.css';
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { GetIngredients, getIsIngModalOpen } from "../../services/Ingredients/IngredientsSelectors";
import { CLOSE_ING_MODAL } from "../../services/IngredientDetails/IngredientDetailsActions";

function BurgerIngredients() {
    const dispatch = useDispatch();
    const {buns, mains, sauces} = useSelector(GetIngredients)
    const isIngModalOpen = useSelector(getIsIngModalOpen);
    const [current, setCurrent] = useState('one');
    const bunRef = useRef();
    const mainRef = useRef();
    const sauceRef = useRef();

    useEffect(() => {
        current === 'one' && bunRef.current.scrollIntoView({behavior: "auto", block: "start"});
        current === 'two' && mainRef.current.scrollIntoView({behavior: "auto", block: "start"});
        current === 'three' && sauceRef.current.scrollIntoView({behavior: "auto", block: "start"});
     
    }, [current]);
    const [ visMainsRef, inMainsView ] = useInView({
        threshold: 0.2
    }) ;
    const [ visSauceRef, inSauceView ] = useInView({
        threshold: 0.7
    }) ;
    const [ visBunsRef, inBunsView ] = useInView({
        threshold: 0.9
    }) ;

    const closeIngModal = () => {
        dispatch({
            type: CLOSE_ING_MODAL
        })
    }

    return (

        <div className={`${styles.box} mb-10 mr-5 `}>
            <div className={`${styles.text} mt-10`}>
                <p className="text text_type_main-large" >
                    Собери бургер
                </p>
            </div>
            <div className={`${styles.verticalMenu} mb-2`}>
                <Tab  value="one" active={inBunsView} onClick={setCurrent}>
                    <p className="text text_type_main-default" >
                        Булки
                    </p>
                </Tab>
                <Tab value="three" active={inSauceView} onClick={setCurrent}>
                    <p className="text text_type_main-default" >
                        Соусы
                    </p>
                </Tab>
                <Tab value="two" active={inMainsView} onClick={setCurrent}>
                    <p className="text text_type_main-default" >
                        Начинка
                    </p>
                </Tab>
                
            </div>
            <div className={`${styles.list} custom-scroll`} >
                <div className={styles.typeName} ref={bunRef} >
                    <p className="text text_type_main-medium" >
                        Булки
                    </p>
                </div>
                <div ref={visBunsRef} className={styles.typeBox}  >
                    {buns.map((item) => <BurgerIngredient item={item} key={item._id} />)}
                </div>
                <div  className={styles.typeName} ref={sauceRef} >
                    <p className="text text_type_main-medium" >
                        Соусы
                    </p>
                </div>
                <div ref={visSauceRef} className={styles.typeBox} >
                    {sauces.map((item) => <BurgerIngredient item={item} key={item._id} />)}
                </div>
                <div className={styles.typeName} ref={mainRef}>
                    <p  className="text text_type_main-medium" >
                        Начинка
                    </p>
                </div>
                <div ref={visMainsRef} className={styles.typeBox} >
                    {mains.map((item) => <BurgerIngredient item={item} key={item._id} />)}
                </div>
                
            </div>
            {isIngModalOpen && (
                    <Modal modalClose={closeIngModal}>
                        <IngredientDetails />
                    </Modal>)}
        </div>
    )
};

export default BurgerIngredients;
