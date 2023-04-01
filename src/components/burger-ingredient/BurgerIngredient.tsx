import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { useDrag } from 'react-dnd';
import { getBun, getIngredientCounters } from '../../services/Ingredients/IngredientsSelectors';
import { Link, useLocation } from 'react-router-dom';
import { IIngredient } from '../../utils/types';
import { useAppSelector } from '../../hooks/hooks';

interface IburgerIngProps {
    item: IIngredient
}
interface Icounters {
    [key: string]: number
}

const BurgerIngredient: React.FC<IburgerIngProps> = ({ item }) => {
    let location = useLocation();
    const bun = useAppSelector(getBun);
    const { image, price, name, _id, type } = item;



    const counters: Icounters = useAppSelector(getIngredientCounters);
    let count = null
    if (type === 'bun') {
        count = (bun?._id === _id) ? 2 : null
    } else {
        count = counters[_id] || null;
    };
    const [, dragRef] = useDrag({
        type: "ingItem",
        item: { _id }
    });

    return (

        <div className={`${styles.ingredient} mr-4 ml-4 mb-10 mt-6`}>
            {count && <Counter count={count} size="default" extraClass="m-1" />}
            <Link
                to={`/ingredients/${_id}`}
                state={{ background: location }}
            >
                <div className='ml-4'>
                    <img ref={dragRef} alt={`${name}`} src={image} />
                </div>
            </Link>
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

    )
};

export default BurgerIngredient;