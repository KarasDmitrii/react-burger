import { useEffect } from 'react';
import { wsFeedConnect, wsFeedDisconnect } from '../../services/feed/FeedActions';
import styles from './feed-page.module.css';
import { useAppSelector, useDispatch } from '../../hooks/hooks';
import { getOrders, getTotal, getTotalToday } from '../../services/feed/FeedSelectors';
import { OrderCard } from '../../components/order-card/OrderCard';
import { WSS_URL } from '../../utils/TrueBurgerApi';

export const FeedPage: React.FC = () => {

    const orders = useAppSelector(getOrders)
    const total = useAppSelector(getTotal)
    const totalToday = useAppSelector(getTotalToday)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsFeedConnect(`${WSS_URL}/all`))
        return () => {
            dispatch(wsFeedDisconnect());

        }

    }, [])

    const ordersNums = orders?.reduce((acc: { successOrders: Array<string>, inWorkOrders: Array<string> }, item) => {
        item.status === 'done' ? acc.successOrders.push(item.number.toString()) : acc.inWorkOrders.push(item.number.toString())
        return acc
    }, { successOrders: [], inWorkOrders: [] });

    return (
        <div className={styles.main}>
            <div className={styles.listBlock}>
                <p className="text text_type_main-large mt-10 mb-5">
                    Лента заказов
                </p>
                <li className={`${styles.list} custom-scroll`} >
                    {orders && orders.map((item) => { return (<div key={item.createdAt} className={styles.card}><OrderCard url='/feed/' data={item} /></div>) })}
                </li>
            </div>
            <div className={styles.listBlock}>
                <div className={styles.orderTables}>
                    <div className={styles.tableOrders}>
                        <p className="text text_type_main-medium mb-6">
                            Готовы:
                        </p>
                        <div className={styles.numList}>
                            {ordersNums && ordersNums.successOrders.slice(0, 10).map((item, index) =>
                                <p key={index} className="text text_type_digits-default mr-5 mb-2" style={{ color: '#00CCCC' }}>{item}</p>
                            )}
                        </div>
                    </div>
                    <div className={styles.tableOrders}>
                        <p className="text text_type_main-medium">
                            В работе:
                        </p>
                        <div className={styles.numList}>
                            {ordersNums && ordersNums.inWorkOrders.slice(0, 10).map((item, index) => <p key={index} className="text text_type_digits-default mr-5 mb-2">{item}</p>)}
                        </div>
                    </div>
                </div>
                <div className='mt-15'>
                    <p className="text text_type_main-medium mb-6">
                        Выполнено за всё время:
                    </p>
                    <p className="text text_type_digits-large">{total}</p>
                </div>
                <div className='mt-15'>
                    <p className="text text_type_main-medium mb-6">
                        Выполнено за сегодня:
                    </p>
                    <p className="text text_type_digits-large">{totalToday}</p>
                </div>
            </div>
        </div>
    )
}