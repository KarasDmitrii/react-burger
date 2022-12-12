import React, { useCallback, useMemo, useState } from "react";
import PropTypes from 'prop-types';
import TypeBlock from "./TypeBlock";
import Modal from "../Modal/Modal";
import Tabs from "./Tabs";
import IngredientDetails from "./IngredientDetails";


const dataPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
});

function Ingredients(props) {

    const bun = useMemo(() => props.arr.filter(item => item.type === "bun"), [props.arr]);
    const sauce = useMemo(() => props.arr.filter(word => word.type === "sauce"), [props.arr]);
    const main = useMemo(() => props.arr.filter(word => word.type === "main"), [props.arr]);

    const [isIngModalOpen, setIsIngModalOpen] = useState(false);
    const [item, setItem] = useState({});
    // useEffect(() => {console.log(item)},[isModalOpen]);

    function OpenIngModal() {
        setIsIngModalOpen(true);
    }
    function CloseIngModal() {
        setIsIngModalOpen(false);
    }

    return (
        <li className="list custom-scroll">
            <div className='type-name'>
                <p className="text text_type_main-medium" >
                    Булки
                </p>
            </div>
            <TypeBlock typeArr={bun} setItem={setItem} OpenModal={OpenIngModal}/>
            <div className='type-name'>
                <p className="text text_type_main-medium" >
                    Соусы
                </p>
            </div>
            <TypeBlock typeArr={sauce} setItem={setItem} OpenModal={OpenIngModal}/>
            <div className='type-name'>
                <p  className="text text_type_main-medium" >
                    Начинка
                </p>
            </div>
            <TypeBlock typeArr={main} setItem={setItem} OpenModal={OpenIngModal}/>
            {isIngModalOpen && (
            <Modal onClose={CloseIngModal} >
                <IngredientDetails ingredientData={item} onClose={CloseIngModal} header="Детали ингредиента"/>
            </Modal> )}
        </li>
    )
}


Ingredients.propTypes = {
    arr: PropTypes.arrayOf(dataPropTypes),
}


function Menu(props) {

    return (
        <>
            <div className='menu-box mb-10 mr-5 '>
                <div className='menu-text mt-10'>
                    <p  className="text text_type_main-large" >
                        Собери бургер
                    </p>
                </div>
                <Tabs />
                <Ingredients arr={props.arr}/>
                
            </div>
        </>
    )

};
Menu.propTypes = {
    arr: PropTypes.arrayOf(dataPropTypes),
}

export default Menu;
