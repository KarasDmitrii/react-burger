
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';
function NavBar(props) {
    
    return (
        <header className={`${styles.header}  mt-10`}>
            {props.children}
        </header>
    )
}
function HeadLink(props) {

    return (
        <div link='' className={`${styles.menuButton} mr-2`}>
            {props.icon}
            <p className={props.textStyle} >
                {props.text}
            </p>
        </div>
    )
}

function Header() {

    return (
        <NavBar>
            <div className={styles.boxHeader}>
                <div className={`${styles.boxButton} m-4`}>
                    <HeadLink icon={<BurgerIcon type="primary" />} textStyle='text text_type_main-small ml-2' text=' Конструктор' />
                    <HeadLink icon={<ListIcon type="secondary" />} textStyle='text text_type_main-small text_color_inactive ml-2' text=' Лента заказов' />
                </div>
            </div>
            <div className={styles.boxLogo}>
                <div className={`${styles.logo} mb-6 mt-6`}>
                    <Logo />
                </div>
            </div>
            <div className={styles.boxLc}>
                <div >
                    <HeadLink icon={<ProfileIcon type="secondary" />} textStyle='text text_type_main-small text_color_inactive ml-2' text='Личный кабинет' />
                </div>
            </div>
        </NavBar>
    )
}
export default Header;