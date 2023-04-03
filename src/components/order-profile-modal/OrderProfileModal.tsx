import { useParams } from 'react-router';
import styles from '../modal/modal.module.css';

import { useAppSelector, useDispatch } from '../../hooks/hooks';
import { OrderInfoModal } from '../order-info-modal/OrderInfoModal';
import { getIsWsOrdersConnected, getOrders } from '../../services/order-list/OrderListSelectors';
import { wsOrdersConnect } from '../../services/order-list/OrderListActions';
import { useEffect, useMemo } from 'react';
import { WSS_URL } from '../../utils/TrueBurgerApi';
import { readCookie } from '../../services/user/UserServices';
import { getUserApi, refreshAccessToken } from '../../services/user/UserAction';
export const OrderProfileModal: React.FC = () => {

    const dispatch = useDispatch();
    
    const accessToken = readCookie('accessToken')?.toString();
    const isWsOrdersConnect = useAppSelector(getIsWsOrdersConnected);
    const orders = useAppSelector(getOrders)
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (!isWsOrdersConnect && accessToken) dispatch(wsOrdersConnect(`${WSS_URL}?token=${accessToken}`))

    }, [])
    const order = orders?.find((item) => item.number === Number(id))




    return (
        <div className={styles.content}>
            <OrderInfoModal data={order} />
        </div>
    );

};