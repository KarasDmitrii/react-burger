
import styles from './burger-constructor.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { ConstructorCard } from "./ConstructorCard";
import { addItem, DELETE_ITEM } from "../../services/Constructor/ConstructorActions";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { composeOrder, getAllData, getBun, getOtherIng, getPrice, activeUser, getIsOrdModalOpen, getIsOrdLoading } from "../../services/Constructor/ConstructorSelectors";
import { CLOSE_ORDER_MODAL, sendOrder } from '../../services/Order/OrderActions';
import OrderDetails from '../order-details/OrderDetails';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../modal/Modal';
import { IIngredient, IIngWithKey, nullIngredientWithKey } from '../../utils/types';
import { useDispatch } from '../../hooks/hooks';



const BurgerConstructor: React.FC = () => {

    const bun: IIngredient | null = useSelector(getBun) ;
    const otherIng: Array<IIngWithKey> = useSelector(getOtherIng);
    const allData: Array<IIngredient> = useSelector(getAllData)
    const price: number = useSelector(getPrice);
    const isOrdModalOpen: boolean = useSelector(getIsOrdModalOpen)
    const isOrdLoading: boolean = useSelector(getIsOrdLoading)
    const dispatch = useDispatch();
    const isActiveUser: boolean = useSelector(activeUser);
    
    const [, dropTarget] = useDrop({
        accept: 'ingItem',
        drop(itemId: {_id: string}) {
            
            dispatch(addItem(allData.find((element: IIngredient) => element._id === itemId._id) || nullIngredientWithKey))
        
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
        <div ref={dropTarget} className={`${styles.box} ml-5 mt-25 mb-10`}>

            <div className={styles.constructorBox}>
                <div className={styles.gapBox}>
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