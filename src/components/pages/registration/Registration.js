
import styles from './registration.module.css';
import { Button, EmailInput, PasswordInput, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../services/user/UserAction";
import { useState } from "react";
import { CustomLink } from '../../../utils/CustomLink';

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
        dispatch(registerUser(
            {
                'email': emailValue,
                'password': passwordValue,
                'name': nameValue
            }
            ));
    }

    return (

        <div className={styles.content}>
            <div className={styles.contentBox}>
                <div className={styles.header}>
                    <p className="text text_type_main-medium">
                        Регистрация
                    </p>
                </div>
                <div className={styles.inputsBox}>
                    <div className='mt-6'>
                        <Input
                            onChange={onNameChange}
                            value={nameValue}
                            name={'name'}
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
                            <CustomLink to='/login'>
                                <p className="text text_type_main-default">
                                    Войти
                                </p>
                            </CustomLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}