
import { useState, useEffect } from "react";
import styles from './Profile.module.css';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/user/UserSelectors";
import { changeUserData, logoutUser } from "../../services/user/UserAction";
import { CustomLink } from "../../components/CustomLink";

import { ILocation, IUser } from "../../utils/types";

export const Profile: React.FC = () => {

    // interface IUser {
    //     name?: string,
    //     email?: string,
    //     password?: string,
    //     activeUser: boolean,
    //     authError: boolean,
    //     isResetPasswordSuccess: boolean,
    //     isForgotPasswordSuccess: boolean,
    // }
    
    

    const dispatch: any = useDispatch();
    // const user: IUser = useSelector(getUser);
    const navigate = useNavigate();
    const location: ILocation = useLocation();
    
    useEffect(() => {
        dispatch(getUser);
    }, [])

    // const {values, handleChange, setValues} = useForm({})
    // const [isChange, setIsChange] = useState(false)

    // const sabmitChangeHandler = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     dispatch(changeUserData({
    //         name: values.name,
    //         email: values.email,
    //         password: values.password,
    //     }));
    //     setIsChange(false)
    // }

    // const userCut = {
    //     name: user.name,
    //     password: user.password,
    //     email: user.email
    // }

    // const cancelChange = () => {
    //     setValues(userCut)
        
    //     setIsChange(false)
    // }
    const logoutHandler = () => {
        dispatch(logoutUser())
        navigate('/login')
    }

    // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     handleChange(e)
    //     setIsChange(true)
    //     }

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
            <div className={styles.contentBox}><Outlet/></div>
            
            {/* <div className={styles.contentBox}>
                <form onSubmit={sabmitChangeHandler} className={styles.inputsBox}>
                    <div className=' mb-6'>
                        <Input
                            onChange={onChange}
                            value={values.name || user.name || ''}
                            name={'name'}
                            inputMode='text'
                            placeholder="Имя"
                            extraClass="mb-2"
                        />
                    </div>
                    <div className="mb-6">
                        <EmailInput
                            onChange={onChange}
                            value={values.email || user.email || ''}
                            name={'email'}
                            placeholder="Почта"
                            isIcon={true}
                            extraClass="mb-2"
                        />
                    </div>
                    <div className="">
                        <PasswordInput
                            onChange={onChange}
                            value={values.password || ''}
                            name={'password'}
                            icon="EditIcon"
                        />
                    </div>
                    {isChange &&
                        <div className={`${styles.buttonBox} mt-5`}>
                            <Button onClick={cancelChange} htmlType="button" type="secondary" size="small">
                                <p className="text text_type_main-small">
                                    Отмена
                                </p>

                            </Button>
                            <Button htmlType='submit' type="primary" size="small" extraClass="ml-2">
                                <p className="text text_type_main-small">
                                    Сохранить
                                </p>
                                
                            </Button>
                        </div>
                    }
                </form>
            </div> */}
        </div>
    )
}