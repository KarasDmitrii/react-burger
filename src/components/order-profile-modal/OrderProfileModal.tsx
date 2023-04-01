import { useParams } from 'react-router';
import styles from '../modal/modal.module.css';

import { useAppSelector } from '../../hooks/hooks';
import { OrderInfoModal } from '../order-info-modal/OrderInfoModal';
import { getOrders } from '../../services/order-list/OrderListSelectors';
export const OrderProfileModal: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const orders = useAppSelector(getOrders)
    const order = orders?.find((item) => item.number === Number(id))
    
    
    return (
        <div className={styles.content}>
            <OrderInfoModal data={order}/>
        </div>
    );

};