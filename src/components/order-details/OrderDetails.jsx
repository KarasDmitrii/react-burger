import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import done from "../../images/graphics.svg";
import styles from '../modal/modal.module.css';

export function OrderDetails({modalClose}) {
    const number = useSelector(state => state.ordModal.orderNum)
    return (
        <>
            <div className={`${styles.icon} mt-10 mr-10`}>
                <CloseIcon type="primary" onClick={modalClose} />
            </div>

            <div>
                <div className={`${styles.order} mt-30 mb-30 ml-25 mr-25`}>
                    <p className="text text_type_digits-large mb-8 ">{number ? number : ''}</p>
                    <p className="text text_type_main-medium">
                        индефикатор заказа
                    </p>
                    <img alt="OrderDetail image" className='mt-15 mb-15' src={done} />
                    <p className="text text_type_main-default">
                        Ваш заказ уже начали готовить
                    </p>
                    <p className="text text_type_main-default text_color_inactive mt-2">
                        Дождитесь готовности на орбитальной станции
                    </p>
                </div>
            </div>
        </>
    );

};

OrderDetails.propTypes = {
    modalClose: PropTypes.func.isRequired
};

export default OrderDetails;