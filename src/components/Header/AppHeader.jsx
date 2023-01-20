
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './app-header.module.css';

export function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.boxHeader}>
                <div className={`${styles.boxButton} m-4`}>
                    <Link to='/'>
                        <div className={`${styles.headLinks} mr-2`}>
                            <BurgerIcon type="primary" />
                            <p className='text text_type_main-small ml-2' >
                                Конструктор
                            </p>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div className={`${styles.headLinks} mr-2`}>
                            <ListIcon type="secondary" />
                            <p className='text text_type_main-default text_color_inactive ml-2' >
                                Лента заказов
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.boxLogo}>
                
                    <Logo />
                
            </div>
            <div className={styles.boxLc}>
                
                    <div className={`${styles.headLinks} mr-2`}>
                        <ProfileIcon type="secondary" />
                        <Link to='/profile'>
                            <p className='text text_type_main-default text_color_inactive ml-2' >
                                Личный кабинет
                            </p>
                        </Link>
                    </div>
                
            </div>
        </header>
    )
}
