
import { useState, useEffect } from "react";
import styles from './Profile.module.css';
import { useLocation, useNavigate } from "react-router-dom";
import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../services/user/UserSelectors";
import { changeUserData, logoutUser } from "../../../services/user/UserAction";
import { CustomLink } from "../../../utils/CustomLink";


export const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(getUser);
    }, [])

    const [isChange, setIsChange] = useState(false)
    const [nameValue, setNameValue] = useState(user.name)
    const onNameChange = e => {
        setNameValue(e.target.value)
        setIsChange(true)
    }
    const [emailValue, setEmailValue] = useState(user.email)
    const onEmailChange = e => {
        setEmailValue(e.target.value)
        setIsChange(true)
    }
    const [passwordValue, setPasswordValue] = useState(user.password)
    const onPasswordChange = e => {
        setPasswordValue(e.target.value)
        setIsChange(true)
    }

    const sabmitChangeHandler = e => {
        e.preventDefault();
        dispatch(changeUserData({
            name: nameValue,
            email: emailValue
        }));
        setIsChange(false)
    }
    const cancelChange = () => {

        setEmailValue(user.email)
        setNameValue(user.name)
        setPasswordValue(user.password)
        setIsChange(false)
    }
    const logoutHandler = () => {
        dispatch(logoutUser())
        navigate('/login')
    }

    return (
        <div className={styles.content}>
            <div className={`${styles.navigationBox} mr-15`}>
                <CustomLink className={styles.textBox} to='/login' state={{ from: location }}>
                    <p className="text text_type_main-medium">
                        Профиль
                    </p>
                </CustomLink>
                <CustomLink to='/profile/orders' className={styles.textBox}>
                    <p className="text text_type_main-medium">
                        История заказов
                    </p>
                </CustomLink>
                <div onClick={logoutHandler} className={styles.textBox}>
                    <p className="text text_type_main-medium text_color_inactive">
                        Выход
                    </p>
                </div>
                <div className={`${styles.textBox} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">
                        В этом разделе вы можете
                        изменить свои персональные данные
                    </p>
                </div>
            </div>
            <div className={styles.contentBox}>
                <form onSubmit={sabmitChangeHandler} className={styles.inputsBox}>
                    <div className=' mb-6'>
                        <Input
                            onChange={onNameChange}
                            value={nameValue || ''}
                            name={'text'}
                            inputMode='text'
                            placeholder="Имя"
                            extraClass="mb-2"
                        />
                    </div>
                    <div className="mb-6">
                        <EmailInput
                            onChange={onEmailChange}
                            value={emailValue || ''}
                            name={'email'}
                            placeholder="Почта"
                            isIcon={true}
                            extraClass="mb-2"
                        />
                    </div>
                    <div className="">
                        <PasswordInput
                            onChange={onPasswordChange}
                            value={passwordValue || ''}
                            name={'password'}
                            icon="EditIcon"
                        />
                    </div>
                    {isChange &&
                        <div className={`${styles.buttonBox} mt-5`}>
                            <Button onClick={cancelChange} htmlType="button" type="secondary" size="small">
                                Отмена
                            </Button>
                            <Button htmlType='submit' type="primary" size="small" extraClass="ml-2">
                                Сохранить
                            </Button>
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}