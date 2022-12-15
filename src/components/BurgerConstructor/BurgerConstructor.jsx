
import { useMemo } from "react";
import styles from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

import PriceButton from "./PriceButton";
import ArrPropTypes from '../../utils/PropTypes.jsx';


function BurgerConstructor(props) {
    const bun = useMemo(() => props.arr.filter(item => item.type === "bun"));
    const sauce = useMemo(() => props.arr.filter(word => word.type === "sauce"));
    const main = useMemo(() => props.arr.filter(word => word.type === "main"));
    return (
        <div className={`${styles.box} ml-5 mt-25 mb-10`}>
            <div style={{ display: 'flex', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div className="ml-10 mr-4">
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                        />
                    </div>
                    <li className={`${styles.list} custom-scroll`} >
                        {main.map((item) => {
                            return (
                                <div className={`m-2 ${styles.mains}`} key={item._id}>
                                    <DragIcon type="primary" />
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image}
                                    />
                                </div>
                            )
                        })}
                    </li>
                    <div className="ml-10 mr-4 mb-10">
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={200}
                            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                        />
                    </div>
                    <PriceButton data={props.arr} />
                </div>
            </div>
        </div>
    )
}
BurgerConstructor.propTypes = {
    arr: PropTypes.arrayOf(ArrPropTypes.isRequired).isRequired
};
export default BurgerConstructor;