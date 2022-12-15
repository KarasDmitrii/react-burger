import React, { useState, useMemo } from "react";
import PropTypes from 'prop-types';
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import styles from './BurgerConstructor.module.css';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ArrPropTypes from '../../utils/PropTypes.jsx';


const PriceButton = (props) => {
    const [isOrdModalOpen, setIsOrdModalOpen] = useState(false);
    const price = useMemo(() => props.data.map(item => item.price).reduce((prev, curr) => prev + curr, 0), [props.data]);
    function OpenOrdModal() {
        setIsOrdModalOpen(true);
    }
    function CloseOrdModal() {
        setIsOrdModalOpen(false);
    }

    return (
        <>
            <div className={`${styles.button} mr-6`}>
                <div className={`${styles.priceFin} mr-10`}>
                    <p className="text text_type_digits-medium" >
                        {price}
                    </p>
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
    data: PropTypes.arrayOf(ArrPropTypes.isRequired).isRequired
}
export default PriceButton;