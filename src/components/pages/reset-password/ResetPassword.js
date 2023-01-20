import { useState } from "react";
import styles from './reset-password.module.css';
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
export const ResetPassword = () => {
    const [codeValue, setCodeValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const onPasswordChange = e => {
        setPasswordValue(e.target.value)
    }

    return (
        <>
            <div className={styles.contentBox}>
                <div className={styles.header}>
                    <p className="text text_type_main-medium">
                        Восстановление пароля
                    </p>
                </div>
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
                    <Button htmlType="button" type="primary" size="medium">
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
            </div>
        </>

    )
}