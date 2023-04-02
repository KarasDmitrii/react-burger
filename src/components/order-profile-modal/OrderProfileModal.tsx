import { useParams } from 'react-router';
import styles from '../modal/modal.module.css';

import { useAppSelector, useDispatch } from '../../hooks/hooks';
import { OrderInfoModal } from '../order-info-modal/OrderInfoModal';
import { getIsWsOrdersConnected, getOrders } from '../../services/order-list/OrderListSelectors';
import { wsOrdersConnect } from '../../services/order-list/OrderListActions';
import { useEffect } from 'react';
import { WSS_URL } from '../../utils/TrueBurgerApi';
export const OrderProfileModal: React.FC = () => {
    const dispatch = useDispatch();
    const isWsOrdersConnect = useAppSelector(getIsWsOrdersConnected);
    useEffect(() => {
        if (!isWsOrdersConnect) dispatch(wsOrdersConnect(`${WSS_URL}/all`))
    }, [])
    const { id } = useParams<{id: string}>();
    const orders = useAppSelector(getOrders)
    const order = orders?.find((item) => item.number === Number(id))
    
    
    return (
        <div className={styles.content}>
            <OrderInfoModal data={order}/>
        </div>
    );

};