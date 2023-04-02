import { useMemo } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { getAllData } from '../../services/Constructor/ConstructorSelectors';
import { IIngredient, TWsRespOrder } from '../../utils/types';
import styles from './order-card.module.css';
import { getTimeElapsed } from '../../utils/GetTimeElapsed';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';


export const OrderCard: React.FC<{ data: TWsRespOrder, isWithStatus?: boolean, url?: string }> = ({ data, isWithStatus = false, url = '' }) => {
    const storeIngredients = useAppSelector(getAllData);
    let location = useLocation();

    const order = useMemo(() => {
        if (!storeIngredients.length || !data) return null
        let isBun = false
        const ingredients = data.ingredients?.reduce((acc: Array<IIngredient>, item) => {

            let ing = storeIngredients.find((elem) => elem._id === item);

            if (ing) {
                if (ing?.type !== 'bun' || !isBun) {
                    acc.push(ing)
                    isBun = true
                }
            };

            return acc
        }, [])


        const price = ingredients?.reduce((acc, item) => {
            return acc + Number(item.price);
        }, 0)

        const ingToPictures = ingredients ? ingredients?.slice(0, 6) : null;
        const numRestIng = ingredients?.length > 6 ? ingredients?.length - 6 : 0;
        const date = data ? getTimeElapsed(data.createdAt) + ' i-GMT+3' : 0;

        return {
            ...data,
            ingredients,
            ingToPictures,
            numRestIng,
            date,
            price
        }
    }, [data, storeIngredients])
    return (
        <div className={styles.orderBox} key={crypto.randomUUID()}>
            <Link
                style={{
                    color: 'white',
                    textDecoration: 'none'
                }}
                to={`${url}${data.number}`}
                state={{ background: location }}
            >
                <div className={`${styles.number} mb-6`}>
                    <p className="text text_type_digits-default">
                        {`#${data.number}`}
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {order?.date}
                    </p>
                </div>
                <div className={`${styles.name} mb-2 text text_type_main-medium`}>{data.name}</div>
                {isWithStatus && <div className={`${styles.status} text text_type_main-default`} style={{ color: data.status === 'done' ? '#00CCCC' : 'white' }}>
                    {data.status === 'created' ? 'Создан' : data.status === 'pending' ? 'Готовится' : 'Выполнен'}
                </div>}
                <div className={`${styles.ingBox} mt-6`} >
                    <div className={styles.ingIcons}><div className={styles.ingCircles}>{order?.ingToPictures?.map((item, index) => {
                        let zIndex = 6 - index;
                        let place = 20 * index
                        return (
                            <div style={{ zIndex: zIndex, right: place }} className={styles.ingCircle} key={crypto.randomUUID()}>
                                <img alt={data.name} style={{ height: '64px', width: '128px', opacity: order.numRestIng && 6 === index + 1 ? "0.5" : "1" }} src={item.image} />
                                {6 === index + 1 ? (
                                    <span
                                        className={`text text_type_digits-default ${styles.restIng}`}>
                                        {order.numRestIng > 0 ? `+${order.numRestIng}` : null}
                                    </span>
                                ) : null}
                            </div>)
                    })}</div></div>
                    <div className={styles.price}>
                        <p className="text text_type_digits-default" >
                            {order?.price}
                        </p>
                        <CurrencyIcon type="primary" /></div>
                </div>
            </Link>
        </div>
    )
}