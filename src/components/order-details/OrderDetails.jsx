import { RevolvingDot } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import done from "../../images/graphics.svg";

import styles from '../modal/modal.module.css';

export function OrderDetails() {
    const number = useSelector(state => state.ordModal.orderNum)
    return (
        <div>
            <div className={`${styles.order} mt-30 mb-30 ml-25 mr-25`}>
                <p className="text text_type_digits-large mb-8 ">{number ? number : ''}</p>
                <p className="text text_type_main-medium">
                    индефикатор заказа
                </p>
                <img alt="OrderDetail image" className='mt-15 mb-15' src={number ? done : <RevolvingDot
                    height="100"
                    width="100"
                    radius="6"
                    color="#801ab3"
                    secondaryColor=''
                    ariaLabel="revolving-dot-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />} />
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