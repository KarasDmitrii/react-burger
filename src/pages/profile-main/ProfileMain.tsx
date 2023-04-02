import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch, useForm } from "../../hooks/hooks";
import { changeUserData } from "../../services/user/UserAction";
import { getUser } from "../../services/user/UserSelectors";

import styles from './profile-main.module.css';

export const ProfileMain: React.FC = () => {

    const user = useSelector(getUser);

    const dispatch = useDispatch();

    const {values, handleChange, setValues} = useForm({ name: user.name, email: user.email});
    const [isChange, setIsChange] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e)
        setIsChange(true)
    };
    const cancelChange = () => {
        setValues(userCut)

        setIsChange(false)
    };
    const sabmitChangeHandler = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(changeUserData({
            name: values.name,
            email: values.email,
            password: values.password,
        }));
        setIsChange(false)
    }

    const userCut = {
        name: user.name || '',
        password: user.password || '',
        email: user.email || ''
    }
    
    return (
        
            <form onSubmit={sabmitChangeHandler} className={styles.inputsBox}>
                <div className=' mb-6'>
                    <Input
                        onChange={onChange}
                        value={values.name || ''}
                        name={'name'}
                        inputMode='text'
                        placeholder="Имя"
                        extraClass="mb-2"
                    />
                </div>
                <div className="mb-6">
                    <EmailInput
                        onChange={onChange}
                        value={values.email || ''}
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
        
    )
}