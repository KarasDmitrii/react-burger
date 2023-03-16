
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { getUser } from '../../services/user/UserSelectors';
import styles from './app-header.module.css';
import { CustomLink } from '../CustomLink';

export function Header() {
    const user = useSelector(getUser);
    return (
        <header className={styles.header}>
            <div className={styles.boxHeader}>
                <div className={`${styles.boxButton} m-4`}>
                    <CustomLink to='/' className={`${styles.headLinks} mr-2`}>
                        <BurgerIcon type="secondary" />
                        <p className='text text_type_main-default ml-2' >
                            Конструктор
                        </p>
                    </CustomLink>
                    <CustomLink to='/profile/orders' className={`${styles.headLinks} mr-2`}>
                        <ListIcon type="secondary" />
                        <p className='text text_type_main-default ml-2' >
                            Лента заказов
                        </p>
                    </CustomLink>
                </div>
            </div>
            <div className={styles.boxLogo}>
                <Logo />
            </div>
            <div className={styles.boxLc}>
                <CustomLink to='/profile' className={`${styles.headLinks} mr-2`}>
                    <ProfileIcon type="secondary" />
                    <p className='text text_type_main-default ml-2' >
                        {user.name || 'Личный кабинет'}
                    </p>
                </CustomLink>
            </div>
        </header>
    )
}
