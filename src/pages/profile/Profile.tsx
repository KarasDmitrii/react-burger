
import { useEffect } from "react";
import styles from './Profile.module.css';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getUser } from "../../services/user/UserSelectors";
import { logoutUser } from "../../services/user/UserAction";
import { CustomLink } from "../../components/CustomLink";

import { ILocation} from "../../utils/types";
import { useAppSelector, useDispatch } from "../../hooks/hooks";

export const Profile: React.FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location: ILocation = useLocation();
    
  

    const logoutHandler = () => {
        dispatch(logoutUser())
        navigate('/login')
    }

    return (
        <div className={styles.content}>
            <div className={`${styles.navigationBox} mr-15`}>
                <CustomLink className={styles.textBox} to='/profile' state={{ from: location }}>
                    <p className="text text_type_main-medium">
                        Профиль
                    </p>
                </CustomLink>
                <CustomLink to='/profile/orders' className={styles.textBox}>
                    <p className="text text_type_main-medium">
                        История заказов
                    </p>
                </CustomLink>
                <div onClick={logoutHandler} className={styles.textBox}>
                    <p className="text text_type_main-medium text_color_inactive">
                        Выход
                    </p>
                </div>
                <div className={`${styles.textBox} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">
                        В этом разделе вы можете
                        изменить свои персональные данные
                    </p>
                </div>
            </div>
            <div className={styles.contentBox}><Outlet/></div>
        </div>
    )
}