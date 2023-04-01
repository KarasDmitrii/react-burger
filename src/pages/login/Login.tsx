
import styles from './login.module.css';
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { loginUser } from "../../services/user/UserAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { CustomLink } from '../../components/CustomLink';
import { useForm } from '../../hooks/hooks';
export const LoginPage: React.FC = () => {

    const {values, handleChange} = useForm({})
    
    const dispatch: any = useDispatch();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser(
            {
                'email': values.email,
                'password': values.password
            }
        ))
    }

    return (
        <div className={styles.contentBox}>
            <div className={styles.header}>
                <p className="text text_type_main-medium">
                    Вход
                </p>
            </div>
            <div className={styles.inputsBox}>
                <form onSubmit={submitHandler} className={styles.form}>
                    <div className='mt-6 mb-6'>
                        <EmailInput
                            onChange={handleChange}
                            value={values.email || ''}
                            name={'email'}
                            isIcon={false}
                        />
                    </div>
                    <div className="mb-6">
                        <PasswordInput
                            onChange={handleChange}
                            value={values.password || ''}
                            name={'password'}
                            extraClass="mb-2"
                        />
                    </div>
                    <Button htmlType='submit' type="primary" size="medium">
                        Войти
                    </Button>
                </form>
                <div className={`${styles.textBox} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">
                        Вы - новый пользователь?
                    </p>
                    <div className="ml-2">
                        <CustomLink to='/register'>
                            <p className="text text_type_main-default">
                                Зарегестрироваться
                            </p>
                        </CustomLink>
                    </div>
                </div>
                <div className={`${styles.textBox} mt-4`}>
                    <p className="text text_type_main-default text_color_inactive">
                        Забыли пароль?
                    </p>
                    <div className="ml-2">
                        <CustomLink to='/forgot-password'>
                            <p className="text text_type_main-default">
                                Востановить пароль
                            </p>
                        </CustomLink>
                    </div>
                </div>
            </div>
        </div>
    )
}