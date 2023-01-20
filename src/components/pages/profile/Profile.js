
import { useState } from "react";
import styles from './Profile.module.css';
import { Link } from "react-router-dom";
import { EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
export const Profile = () => {
    const [nameValue, setNameValue] = useState('')
    const onNameChange = e => {
        setNameValue(e.target.value)
    }
    const [loginValue, setLoginValue] = useState('')
    const onLoginChange = e => {
        setLoginValue(e.target.value)
    }
    const [passwordValue, setPasswordValue] = useState('')
    const onPasswordChange = e => {
        setPasswordValue(e.target.value)
    }
    return (
        <div className={styles.content}>
            <div className={`${styles.navigationBox} mr-15`}>
                <div className={styles.textBox}>
                    <Link to='/login'>
                        <p className="text text_type_main-medium">
                            Профиль
                        </p>
                    </Link>
                </div>
                <div className={styles.textBox}>
                    <p className="text text_type_main-medium">
                        История заказов
                    </p>
                </div>
                <div className={styles.textBox}>
                    <p className="text text_type_main-medium">
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
            <div className={styles.contentBox}>
                <div className={styles.inputsBox}>
                    <div className=' mb-6'>
                        <EmailInput
                            onChange={onNameChange}
                            value={nameValue}
                            name={'email'}
                            placeholder="Имя"
                            isIcon={true}
                            extraClass="mb-2"
                        />
                    </div>
                    <div className="mb-6">
                        <EmailInput
                            onChange={onLoginChange}
                            value={loginValue}
                            name={'email'}
                            placeholder="Логин"
                            isIcon={true}
                            extraClass="mb-2"
                        />
                    </div>
                    <div className="">
                        <PasswordInput
                            onChange={onPasswordChange}
                            value={passwordValue}
                            name={'password'}
                            icon="EditIcon"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}