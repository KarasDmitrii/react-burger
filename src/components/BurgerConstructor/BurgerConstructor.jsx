
import React, { useState, useEffect, useMemo } from "react";
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";
import OrderDetails from "./OrderDetails";
import ItemCard from "./ItemCard";
import PriceButton from "./PriceButton";


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




function Burger(props) {

    const bun = useMemo(() => props.arr.filter(item => item.type === "bun"));
    const sauce = useMemo(() => props.arr.filter(word => word.type === "sauce"));
    const main = useMemo(() => props.arr.filter(word => word.type === "main"));

    return (
        <div style={{ display: 'flex', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className="ml-10 mr-4">
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                    />
                </div>
                <li className="mains-list custom-scroll" >
                    <ItemCard ing={main} />
                </li>
                <div className="ml-10 mr-4 mb-10">
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                    />
                </div>
                <PriceButton data={props.arr} />
            </div>
        </div>
    )

}
Burger.propTypes = {
    arr: PropTypes.arrayOf(dataPropTypes).isRequired
};

function BurgerConstructor(props) {

    return (
        <>
            <div className="constructor-box ml-5 mt-25 mb-10">
                <Burger arr={props.arr} />
            </div>
        </>
    )
}
BurgerConstructor.propTypes = {
    arr: PropTypes.arrayOf(dataPropTypes).isRequired
};
export default BurgerConstructor;