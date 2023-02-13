import { useState } from "react";
import styles from './reset-password.module.css';
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../services/user/UserAction";
import { getIsForgotPass, getIsResetPass } from "../../services/user/UserSelectors";
import { useForm } from "../../hooks/useForm";
export const ResetPassword = () => {
    const isPasswordReset = useSelector(getIsResetPass)
    const isPasswordForgot = useSelector(getIsForgotPass)
    const dispatch = useDispatch();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';

    const {values, handleChange} = useForm('')

    const submitResetPassHandler = e => {
        e.preventDefault();
        dispatch(resetPassword({
            "password": values.password,
            "token": values.code,
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
                            onChange={handleChange}
                            value={values.password || ''}
                            name={'password'}
                            extraClass="mb-2"
                        />
                    </div>
                    <div className='mt-6 mb-6'>
                        <Input
                            type={'text'}
                            placeholder={'Укажите код из письма'}
                            onChange={handleChange}
                            value={values.code || ''}
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