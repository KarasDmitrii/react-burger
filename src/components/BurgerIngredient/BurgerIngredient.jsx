import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.css';
import ArrPropTypes from '../../utils/PropTypes.jsx';



const BurgerIngredient = ({ item, setItem, openModal, id}) => {
    const { image, price, name} = item;
    function handleClick() {
        setItem({ item });
        openModal();
        
       
    };

    return (
        <div  key={id}>
            <div className={`${styles.ingredient} mr-4 ml-4 mb-10 mt-6`} 
                onClick={handleClick}>
                <Counter count={1} size="default" extraClass="m-1" />
                <div className='ml-4'>
                    <img src={image} />
                </div>
                <div className={`${styles.price} mt-1 mb-1`}>
                    <p className="text text_type_digits-default mr-2" >
                        {price}
                    </p>
                    <CurrencyIcon type="primary" />
                </div>
                <div className={styles.name}>
                    <p className="text text_type_main-default" >
                        {name}
                    </p>
                </div>
            </div>

        </div>
    )
};
BurgerIngredient.propTypes = {
    item: PropTypes.objectOf(ArrPropTypes.isRequired).isRequired,
    id: PropTypes.string.isRequired,
    setItem: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
};
export default BurgerIngredient;