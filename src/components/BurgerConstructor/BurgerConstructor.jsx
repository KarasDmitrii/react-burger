
import { useMemo, useEffect } from "react";
import styles from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

import PriceButton from "./PriceButton";
import ArrPropTypes from '../../utils/PropTypes.jsx';


function BurgerConstructor(props) {

    const bun = useMemo(() => props.arr.find(item => item.type === "bun"), [props.arr]);
    // const sauce = useMemo(() => props.arr.filter(word => word.type === "sauce"), [props.arr]);
    const otherIng = useMemo(() => props.arr.filter(word => word.type != "bun"), [props.arr]);

    return (
        <div className={`${styles.box} ml-5 mt-25 mb-10`}>
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
                        {otherIng.map((item) => {
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
                    <div className="ml-8 mr-4 mb-10">
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${bun.name} (низ)`}
                            price={bun.price}
                            thumbnail={bun.image}
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