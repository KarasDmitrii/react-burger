import { useState } from "react";
import styles from './forgot-password.module.css';
import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate } from "react-router-dom";
import { forgotPassword } from "../../../services/user/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { getIsForgotPass } from "../../../services/user/UserSelectors";
export const ForgotPassword = () => {
    const dispatch = useDispatch();
    const isPasswordForgot = useSelector(getIsForgotPass)
    const [emailValue, setEmailValue] = useState('')
    const onEmailChange = e => {
        setEmailValue(e.target.value)
    }
    const sabmitForgotPassHandler = e => {
        e.preventDefault()
        dispatch(forgotPassword({
            'email': emailValue
        }))
    }
    return (

        <div className={styles.content}>
            <div className={styles.contentBox}>
                <div className={styles.header}>
                    <p className="text text_type_main-medium">
                        Восстановление пароля
                    </p>
                </div>
                <div className={styles.inputsBox}>
                    <form onSubmit={sabmitForgotPassHandler} className={styles.form}>
                        <div className='mt-6 mb-6'>
                            <EmailInput
                                onChange={onEmailChange}
                                value={emailValue}
                                name={'email'}
                                isIcon={false}
                            />
                        </div>
                        <Button htmlType='submit' type="primary" size="medium">
                            Востановить
                        </Button>
                    </form>
                    <div className={`${styles.textBox} mt-20`}>
                        <p className="text text_type_main-default text_color_inactive">
                            Вспомнили пароль?
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
            {isPasswordForgot && <Navigate to='/reset-password'/>}
        </div>

    )
}