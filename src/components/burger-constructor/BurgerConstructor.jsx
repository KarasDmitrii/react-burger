
import styles from './burger-constructor.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { ConstructorCard } from "./ConstructorCard";
import { addItem, DELETE_ITEM } from "../../services/Constructor/ConstructorActions";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { composeOrder, getAllData, getBun, getOtherIng, getPrice, activeUser } from "../../services/Constructor/ConstructorSelectors";
import { CLOSE_ORDER_MODAL, sendOrder } from '../../services/Order/OrderActions';
import {Modal} from '../modal/Modal';
import OrderDetails from '../order-details/OrderDetails';

function BurgerConstructor() {
    const bun = useSelector(getBun);
    const otherIng = useSelector(getOtherIng);
    const allData = useSelector(getAllData)
    const price = useSelector(getPrice);
    const isOrdModalOpen = useSelector(state => state.ordModal.isOrdModalOpen)
    const dispatch = useDispatch();
    const isActiveUser = useSelector(activeUser);
    const [, dropTarget] = useDrop({
        accept: 'ingItem',
        drop(itemId) {

            dispatch(addItem(allData.find(element => element._id === itemId._id)))

        },
    })

    const handleDelete = (key) => {
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

    const onClick = () => {
        const order = composeOrder(otherIng, bun)
        dispatch(sendOrder(order))
    }

    return (
        <div ref={dropTarget} className={`${styles.box} ml-5 mt-25 mb-10`}>

            <div className={styles.constructorBox}>
                <div className={styles.gapBox}>
                    <div className="ml-8 mr-4">
                        {bun.image ? (
                            <ConstructorElement
                                type="top"
                                isLocked={true}
                                text={`${bun.name} (вверх)`}
                                price={bun.price}
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
                        {bun.image ? (
                            <ConstructorElement
                                type="bottom"
                                isLocked={true}
                                text={`${bun.name} (низ)`}
                                price={bun.price}
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

                        {otherIng[0] && bun.image && isActiveUser && <Button onClick={onClick} htmlType="button" type="primary" size="medium">
                            <p className="text text_type_main-default" >
                                Оформить заказ
                            </p>
                        </Button>}

                    </div>
                    {isOrdModalOpen &&
                        <Modal modalClose={closeModal}>
                            <OrderDetails />
                        </Modal>
                    }
                </div>
            </div>

        </div>
    )
}

export default BurgerConstructor;