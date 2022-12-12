import React, { useState, useMemo } from "react";
import PropTypes from 'prop-types';
import OrderDetails from "./OrderDetails";
import Modal from "../Modal/Modal";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

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


const GetPrice = (props) => {

    const price = useMemo(() => props.arr.map(item => item.price).reduce((prev, curr) => prev + curr, 0), [props.arr]);
    return (
        <p className="text text_type_digits-medium" >
            {price}
        </p>);
};
GetPrice.propTypes = {
    arr: PropTypes.arrayOf(dataPropTypes).isRequired
};

const PriceButton = (props) => {
    const [isOrdModalOpen, setIsOrdModalOpen] = useState(false);

    function OpenOrdModal() {
        setIsOrdModalOpen(true);
    }
    function CloseOrdModal() {
        setIsOrdModalOpen(false);
    }

    return (
        <>
            <div className="price-button mr-6">
                <div className="price-fin mr-10">

                    <GetPrice arr={props.data} />
                    <CurrencyIcon type="primary" />
                </div>
                <Button onClick={OpenOrdModal} htmlType="button" type="primary" size="medium">
                    <p className="text text_type_main-default" >
                        Оформить заказ
                    </p>
                </Button>
            </div>
            {isOrdModalOpen && (
                <Modal onClose={CloseOrdModal}>
                    <OrderDetails onClose={CloseOrdModal} />
                </Modal>
            )}
        </>
    );
};
PriceButton.propTypes = {
    data: PropTypes.arrayOf(dataPropTypes).isRequired
}
export default PriceButton;