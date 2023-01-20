
import styles from './registration.module.css';
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../services/user/UserAction";
import { useState } from "react";
export const Registration = () => {
    const dispatch = useDispatch();

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const onNameChange = e => {
        setNameValue(e.target.value)
    }
    const onEmailChange = e => {
        setEmailValue(e.target.value)
    }
    const onPasswordChange = e => {
        setPasswordValue(e.target.value)
    }

    const registerHandler = () => {
        dispatch(loginUser);
    }

    return (

        <>
            <div className={styles.contentBox}>
                <div className={styles.header}>
                    <p className="text text_type_main-medium">
                        Регистрация
                    </p>
                </div>
                <div className={styles.inputsBox}>
                    <div className='mt-6'>
                        <EmailInput
                            onChange={onNameChange}
                            value={nameValue}
                            name={'email'}
                            placeholder="Имя"
                        />
                    </div>
                    <div className="mt-6">
                        <EmailInput
                            onChange={onEmailChange}
                            value={emailValue}
                            name={'email'}
                            isIcon={false}
                        />
                    </div>
                    <div className="mb-6 mt-6">
                        <PasswordInput
                            onChange={onPasswordChange}
                            value={passwordValue}
                            name={'password'}
                            extraClass="mb-2"
                        />
                    </div>
                    <Button onClick={registerHandler} htmlType="button" type="primary" size="medium">
                        Зарегестрироваться
                    </Button>
                    <div className={`${styles.textBox} mt-20`}>
                        <p className="text text_type_main-default text_color_inactive">
                            Уже зарегистрированы?
                        </p>
                        <div className="ml-2">
                            <Link to='/login'>
                                <p className="text text_type_main-default">
                                    Войти
                                </p>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </>

    )
}