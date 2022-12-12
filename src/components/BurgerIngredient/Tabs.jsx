import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
const Tabs = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className='vertical-menu' style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                <p className="text text_type_main-default" >
                    Булки
                </p>
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                <p className="text text_type_main-default" >
                    Начинка
                </p>
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                <p className="text text_type_main-default" >
                    Соусы
                </p>
            </Tab>
        </div>
    )
};

export default Tabs;