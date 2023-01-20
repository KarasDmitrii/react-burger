import { useState } from "react";
import styles from './forgot-password.module.css';
import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
export const ForgotPassword = () => {
    const [emailValue, setEmailValue] = useState('')
    const onEmailChange = e => {
        setEmailValue(e.target.value)
    }
    return (

        <div className={styles.main}>
            <div className={styles.contentBox}>
                <div className={styles.header}>
                    <p className="text text_type_main-medium">
                        Восстановление пароля
                    </p>
                </div>
                <div className={styles.inputsBox}>
                    <div className='mt-6 mb-6'>
                        <EmailInput
                            onChange={onEmailChange}
                            value={emailValue}
                            name={'email'}
                            isIcon={false}
                        />
                    </div>
                    <Button htmlType="button" type="primary" size="medium">
                        Востановить
                    </Button>
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
        </div>

    )
}