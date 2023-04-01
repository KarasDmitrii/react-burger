import { useParams } from 'react-router';
import styles from '../modal/modal.module.css';
import { getIsWsFeedConnected, getOrders } from '../../services/feed/FeedSelectors';
import { useAppSelector, useDispatch } from '../../hooks/hooks';
import { OrderInfoModal } from '../order-info-modal/OrderInfoModal';
import { useEffect } from 'react';
import { wsFeedConnect } from '../../services/feed/FeedActions';
import { WSS_URL } from '../../utils/TrueBurgerApi';
export const OrderFeedModal: React.FC = () => {
    const isWsFeedConnect = useAppSelector(getIsWsFeedConnected);
    const { id } = useParams<{ id: string }>();
    const orders = useAppSelector(getOrders)
    const order = orders?.find((item) => item.number === Number(id))
    const dispatch = useDispatch();
    useEffect(() => {
        if (!isWsFeedConnect) dispatch(wsFeedConnect(`${WSS_URL}/all`))
    }, [])
    return (
        <div className={styles.content}>
            <OrderInfoModal data={order} />
        </div>
    );

};