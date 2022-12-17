import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.css';




const BurgerIngredient = ({item, setItem, openModal}) => {
    const { image, price, name} = item;
    function handleClick() {
        setItem(item);
        openModal();   
    };

    return (
        <div  >
            <div className={`${styles.ingredient} mr-4 ml-4 mb-10 mt-6`} 
                onClick={handleClick}>
                <Counter count={1} size="default" extraClass="m-1" />
                <div className='ml-4'>
                    <img alt='изображение продукта' src={image} />
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

export default BurgerIngredient;