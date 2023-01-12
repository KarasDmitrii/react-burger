
import styles from './BurgerConstructor.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { ConstructorCard } from "./ConstructorCard";
import { addItem, DELETE_ITEM } from "../../services/Constructor/ConstructorActions";
import { OPEN_ORDER_MODAL } from "../../services/Order/OrderActions";
import Modal from "../Modal/Modal";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
import { getAllData, getBun, getIsOrdModalOpen, getOtherIng, getPrice } from "../../services/Constructor/ConstructorSelectors";

function BurgerConstructor() {
    const bun = useSelector(getBun);
    const otherIng = useSelector(getOtherIng);
    const allData = useSelector(getAllData)
    const isOrdModalOpen = useSelector(getIsOrdModalOpen);
    const price = useSelector(getPrice);
    const dispatch = useDispatch();
    
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
    const openOrderModal = () => {
        dispatch({
            type: OPEN_ORDER_MODAL
        });
    }

    return (
        <div ref={dropTarget} className={`${styles.box} ml-5 mt-25 mb-10`}>

            <div className={styles.constructorBox}>
                <div className={styles.gapBox}>
                    <div className="ml-8 mr-4">
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                    </div>
                    <li className={`${styles.list} custom-scroll`} >
                        {otherIng && otherIng.map((elem, index) => {
                            return (<ConstructorCard
                                key={elem.key}
                                elem={elem}
                                index={index}
                                handleDelete={handleDelete}
                            />)
                        })}
                    </li>
                    <div className="ml-8 mr-4 mb-10">
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${bun.name} (низ)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                    </div>
                    <>
                        <div className={`${styles.button} mr-6`}>
                            <div className={`${styles.priceFin} mr-10`}>
                                <p className="text text_type_digits-medium" >
                                    {price}
                                </p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <Button onClick={openOrderModal} htmlType="button" type="primary" size="medium">
                                <p className="text text_type_main-default" >
                                    Оформить заказ
                                </p>
                            </Button>
                        </div>
                        {isOrdModalOpen && (
                            <Modal>
                                <OrderDetails />
                            </Modal>
                        )}
                    </>
                </div>
            </div>

        </div>
    )
}

export default BurgerConstructor;