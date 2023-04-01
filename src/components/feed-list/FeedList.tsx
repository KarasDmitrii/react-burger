import { useAppSelector, useDispatch } from '../../hooks/hooks';
import { wsOrdersConnect } from '../../services/order-list/OrderListActions';
import { getOrders } from '../../services/order-list/OrderListSelectors';
import { IWsResp, TWsRespOrder } from '../../utils/types';
import { OrderCard } from '../order-card/OrderCard';
import styles from './feed-list.module.css';

export const FeedList: React.FC = () => {
    const orders = useAppSelector(getOrders)
    const dispatch = useDispatch();
    dispatch(wsOrdersConnect("wss://norma.nomoreparties.space/orders/all"))
    
    return (
        <div>gkgjh</div>
        
        // <li className={`${styles.list} custom-scroll`} >
        // {orders.map((item) => {return(<OrderCard data={item}/>)} )}
        // </li>
        
    
                   
    )
}