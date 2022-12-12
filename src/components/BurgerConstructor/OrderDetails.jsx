import done from "../../images/done.png"
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

function OrderDetails({onClose}) {
    return(
        <div className="order-box">
            <div className='order-close-icon mt-15 mr-10'>
                <CloseIcon type="primary" onClick={onClose} />
            </div>
            
            <div className='order mt-30 mb-30 ml-25 mr-25'>
                <p className="text text_type_digits-large mb-8 ">034536</p>
                <p className="text text_type_main-medium">
                    индефикатор заказа
                </p>
                <img className='order-image mt-15 mb-15' src={done}/>
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
OrderDetails.propTypes = {
    onclose: PropTypes.func.isRequired
}
export default OrderDetails;