
import styles from './burger-constructor.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop } from "react-dnd";
import { ConstructorCard } from "./ConstructorCard";
import { addItem, DELETE_ITEM } from "../../services/Constructor/ConstructorActions";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { composeOrder, getAllData, getBun, getOtherIng, getPrice, activeUser, getIsOrdModalOpen, getIsOrdLoading } from "../../services/Constructor/ConstructorSelectors";
import { CLOSE_ORDER_MODAL, sendOrder } from '../../services/Order/OrderActions';
import OrderDetails from '../order-details/OrderDetails';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../modal/Modal';
import { IIngredient, IIngWithKey, nullIngredient } from '../../utils/types';
import { useAppSelector, useDispatch } from '../../hooks/hooks';



const BurgerConstructor: React.FC = () => {

    const bun: IIngredient | null = useAppSelector(getBun) ;
    const otherIng: Array<IIngWithKey> = useAppSelector(getOtherIng);
    const allData: Array<IIngredient> = useAppSelector(getAllData)
    const price: number = useAppSelector(getPrice);
    const isOrdModalOpen: boolean = useAppSelector(getIsOrdModalOpen)
    const dispatch = useDispatch();
    const isActiveUser: boolean = useAppSelector(activeUser);
    
    const [, dropTarget] = useDrop({
        accept: 'ingItem',
        drop(itemId: {_id: string}) {
            
            dispatch(addItem({item: allData.find((element) => element._id === itemId._id) || nullIngredient, key: crypto.randomUUID()}))
        
        },
    })

    const handleDelete = (key: string) => {
        dispatch({
            type: DELETE_ITEM,
            payload: key
        })
    }

    const closeModal = () => {
        dispatch({
            type: CLOSE_ORDER_MODAL
        })
    }

    const navigate = useNavigate();

    const onClick = () => {
        if (isActiveUser) {
            if (bun) {
            const order = composeOrder(otherIng, bun)
            dispatch(sendOrder(order))
        }

        } else {
            navigate('/login')
        }
    }

    return (
        <div  className={`${styles.box} ml-5 mt-25 mb-10`}>

            <div className={styles.constructorBox}>
                <div className={styles.gapBox} ref={dropTarget}>
                    <div className="ml-8 mr-4">
                        {bun ? (
                            <ConstructorElement
                                type="top"
                                isLocked={true}
                                text={`${bun.name} (вверх)`}
                                price={Number(bun.price)}
                                thumbnail={bun.image}
                            />
                        ) : (
                            <div className={styles.topEmptyConstructorElement}>Выберите булку</div>)}
                    </div>
                    <li className={`${styles.list} custom-scroll`} >
                        {otherIng[0] ? (otherIng.map((elem, index) => {
                            return (<ConstructorCard
                                key={elem.key}
                                elem={elem}
                                index={index}
                                handleDelete={handleDelete}
                            />)
                        })) : (
                            <div className={`${styles.midEmptyConstructorElement} ml-8 mr-4 `}>Добавьте начинку</div>
                        )}
                    </li>
                    <div className="ml-8 mr-4 mb-10">
                        {bun ? (
                            <ConstructorElement
                                type="bottom"
                                isLocked={true}
                                text={`${bun.name} (низ)`}
                                price={Number(bun.price)}
                                thumbnail={bun.image}
                            />
                        ) : (
                            <div className={styles.bottomEmptyConstructorElement}> Выберите булку</div>
                        )}
                    </div>
                    <div className={`${styles.button} mr-6`}>
                        <div className={`${styles.priceFin} mr-10`}>
                            <p className="text text_type_digits-medium" >
                                {price}
                            </p>
                            <CurrencyIcon type="primary" />
                        </div>

                        {otherIng[0] && bun && <Button onClick={onClick} htmlType="button" type="primary" size="medium">
                            <p className="text text_type_main-default" >
                                Оформить заказ
                                
                            </p>
                        </Button>}
                    </div>
                    {isOrdModalOpen &&
                        <Modal modalClose={closeModal} >
                            <OrderDetails />
                        </Modal>
                    }
                </div>
            </div>

        </div>
    )
}

export default BurgerConstructor;