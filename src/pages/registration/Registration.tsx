import styles from './registration.module.css';
import { Button, EmailInput, PasswordInput, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { registerUser } from "../../services/user/UserAction";
import { CustomLink } from '../../components/CustomLink';
import { useDispatch, useForm } from '../../hooks/hooks';


export const Registration: React.FC = () => {
    const dispatch = useDispatch();

    const {values, handleChange} = useForm({})

    const registerHandler = () => {
        dispatch(registerUser(
            {
                email: values.email,
                password: values.password,
                name: values.name,
            }
            ));
    }

    return (

        <div className={styles.content}>
            <form className={styles.contentBox} onSubmit={registerHandler}>
                <div className={styles.header}>
                    <p className="text text_type_main-medium">
                        Регистрация
                    </p>
                </div>
                <div className={styles.inputsBox}>
                    <div className='mt-6'>
                        <Input
                            onChange={handleChange}
                            value={values.name || ''}
                            name={'name'}
                            placeholder="Имя"
                        />
                    </div>
                    <div className="mt-6">
                        <EmailInput
                            onChange={handleChange}
                            value={values.email || ''}
                            name={'email'}
                            isIcon={false}
                        />
                    </div>
                    <div className="mb-6 mt-6">
                        <PasswordInput
                            onChange={handleChange}
                            value={values.password || ''}
                            name={'password'}
                            extraClass="mb-2"
                        />
                    </div>
                    <Button htmlType="submit" type="primary" size="medium">
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
            </form>
        </div>
    )
}