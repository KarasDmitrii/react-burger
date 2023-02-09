
import styles from './login.module.css';
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { getUserApi, loginUser, refreshAccessToken } from "../../../services/user/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { CustomLink } from '../../../utils/CustomLink';
export const LoginPage = () => {
    const dispatch = useDispatch();
    const [emailValue, setEmailValue] = useState('')
    const onEmailChange = e => {
        setEmailValue(e.target.value)
    }
    
    const [passwordValue, setPasswordValue] = useState('')
    const onPasswordChange = e => {
        setPasswordValue(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault();
        
        dispatch(loginUser(
            {
                'email': emailValue,
                'password': passwordValue
            }
        ))
        

    }
   


    return (
        <>
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
                                onChange={onEmailChange}
                                value={emailValue}
                                name={'email'}
                                isIcon={false}
                            />
                        </div>
                        <div className="mb-6">
                            <PasswordInput
                                onChange={onPasswordChange}
                                value={passwordValue}
                                name={'password'}
                                extraClass="mb-2"
                            />
                        </div>
                        <Button  htmlType='submit' type="primary" size="medium">
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
        </>

    )
}