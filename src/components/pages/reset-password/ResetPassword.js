import { useState } from "react";
import styles from './reset-password.module.css';
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../services/user/UserAction";
import { getIsForgotPass, getIsResetPass } from "../../../services/user/UserSelectors";
export const ResetPassword = () => {
    const isPasswordReset = useSelector(getIsResetPass)
    const isPasswordForgot = useSelector(getIsForgotPass)
    const [codeValue, setCodeValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';
    const onPasswordChange = e => {
        setPasswordValue(e.target.value)
    }
    const submitResetPassHandler = e => {
        e.preventDefault();
        dispatch(resetPassword({
            "password": passwordValue,
            "token": codeValue
        }))
    }

    return (
        <div className={styles.contentBox}>
            <div className={styles.header}>
                <p className="text text_type_main-medium">
                    Восстановление пароля
                </p>
            </div>
            <form onSubmit={submitResetPassHandler}>
                <div className={styles.inputsBox}>
                    <div className="mt-6">
                        <PasswordInput
                            placeholder={'Укажите новый пароль'}
                            onChange={onPasswordChange}
                            value={passwordValue}
                            name={'password'}
                            extraClass="mb-2"
                        />
                    </div>
                    <div className='mt-6 mb-6'>
                        <Input
                            type={'text'}
                            placeholder={'Укажите код из письма'}
                            onChange={e => setCodeValue(e.target.value)}
                            value={codeValue}
                            name={'code'}
                            error={false}
                            errorText={'Ошибка'}
                            size={'default'}
                            extraClass="ml-1"
                        />
                    </div>
                    <Button htmlType="submit" type="primary" size="medium">
                        Востановить
                    </Button>
                    <div className={`${styles.textBox} mt-20`}>
                        <p className="text text_type_main-default text_color_inactive">
                            Вспомнили пароль?
                        </p>
                        <a className="ml-2">
                            <Link to='/login'>
                                <p className="text text_type_main-default">
                                    Войти
                                </p>
                            </Link>
                        </a>
                    </div>
                </div>
            </form>
            {!isPasswordForgot && <Navigate to={fromPage} />}
            {isPasswordReset && <Navigate to='/login' />}
        </div>
    )
}