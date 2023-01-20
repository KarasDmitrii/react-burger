import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {ArrPropTypes} from '../../utils/PropTypes.jsx';
import { useDrag } from 'react-dnd';
import { OPEN_ING_MODAL } from '../../services/IngredientDetails/IngredientDetailsActions';
import { getBun, getIngredientCounters } from '../../services/Ingredients/IngredientsSelectors';



const BurgerIngredient = (item) => {
    const bun = useSelector(getBun);
    const { image, price, name, _id, type } = item.item;
    const dispatch = useDispatch();

    const counters = useSelector(getIngredientCounters);
    var count = null
    if (type === 'bun') {
        count = (bun._id === _id) ? 2 : null
    } else {
        count = counters[_id];
    };
    const [, dragRef] = useDrag({
        type: "ingItem",
        item: { _id }
    });
    const openIngModal = () => {
        dispatch({
            type: OPEN_ING_MODAL,
            payload: item.item
        })
    }
    return (
        <div   >
            <div className={`${styles.ingredient} mr-4 ml-4 mb-10 mt-6`}
                onClick={openIngModal}>
                {count && <Counter count={count} size="default" extraClass="m-1" />}
                <div className='ml-4'>
                    <img ref={dragRef} alt='изображение продукта' src={image} />
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
    item: ArrPropTypes.isRequired,

}
export default BurgerIngredient;