import { useSelector } from "react-redux";
import done from "../../images/graphics.svg";
import { getOrderNum } from "../../services/Order/OrderSelectors";
import styles from '../Modal/Modal.module.css';

export function OrderDetails() {
    const orderNum = useSelector(getOrderNum);
    return(
        <div>
            <div className={`${styles.order} mt-30 mb-30 ml-25 mr-25`}>
                <p className="text text_type_digits-large mb-8 ">{orderNum}</p>
                <p className="text text_type_main-medium">
                    индефикатор заказа
                </p>
                <img alt="OrderDetail image" className='mt-15 mb-15' src={done}/>
                <p className="text text_type_main-default">
                    Ваш заказ уже начали готовить
                </p>
                <p className="text text_type_main-default text_color_inactive mt-2">
                    Дождитесь готовности на орбитальной станции
                </p>
            </div>    
        </div>
    );

};

export default OrderDetails;