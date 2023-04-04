
import styles from './forgot-password.module.css';
import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate } from "react-router-dom";
import { forgotPassword } from "../../services/user/UserAction";
import { getIsForgotPass } from "../../services/user/UserSelectors";
import { useAppSelector, useDispatch, useForm } from '../../hooks/hooks';

export const ForgotPassword: React.FC = () => {
    const dispatch = useDispatch();
    const isPasswordForgot = useAppSelector(getIsForgotPass)
    const {values, handleChange} = useForm({})
    const sabmitForgotPassHandler = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(forgotPassword({
            'email': values.email
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
                                onChange={handleChange}
                                value={values.email || ''}
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