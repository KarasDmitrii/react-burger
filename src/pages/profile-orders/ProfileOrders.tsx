import { useEffect } from "react";
import { OrderCard } from "../../components/order-card/OrderCard"
import { useAppSelector, useDispatch } from "../../hooks/hooks"
import { wsOrderDisconnect, wsOrdersConnect } from "../../services/order-list/OrderListActions";
import { getOrders } from "../../services/order-list/OrderListSelectors";
import { readCookie } from "../../services/user/UserServices";
import styles from './profile-orders.module.css';
import { WSS_URL } from "../../utils/TrueBurgerApi";

export const ProfileOrders: React.FC = () => {
    const accessToken = readCookie('accessToken')?.toString();
    const orders = useAppSelector(getOrders)
    const dispatch = useDispatch();
    
    useEffect(() => {
        {accessToken && dispatch(wsOrdersConnect(`${WSS_URL}?token=${accessToken}`))}
        return () => {
            dispatch(wsOrderDisconnect());
        }
    }, [])
    
    return (
       
        <li className={`${styles.list} custom-scroll`} >
        {orders && orders.map((item) => {return(<div key={item._id} className={styles.card}><OrderCard url="/orders/" data={item} isWithStatus={true}/></div>)} )}
        
        </li>
    )
}