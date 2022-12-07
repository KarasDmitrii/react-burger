import React from "react";
import {Tab, Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../../utils/data';

const dataPropTypes = PropTypes.shape({
    _id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired

});

class Ingredients extends React.Component {
    bun = this.props.arr.filter(word => word.type === "bun");
    souse = this.props.arr.filter(word => word.type === "sauce");
    main = this.props.arr.filter(word => word.type === "main");
    render() {
        return(
            <div className="list custom-scroll">
                <div className='type-name'>
                    <Text text='Булки' class="text text_type_main-medium"/>   
                </div> 
                <TypeBlock typeArr={this.bun}/>
                <div className='type-name'>
                    <Text text='Соусы' class="text text_type_main-medium"/>   
                </div>
                <TypeBlock typeArr={this.souse}/> 
                <div className='type-name'>
                    <Text text='Начинка' class="text text_type_main-medium"/>   
                </div>
                <TypeBlock typeArr={this.main}/> 
            </div>
        )
    }
}
Ingredients.propTypes = {
    arr: PropTypes.arrayOf(dataPropTypes),
    bun: PropTypes.arrayOf(dataPropTypes),
    souse: PropTypes.arrayOf(dataPropTypes),
    main: PropTypes.arrayOf(dataPropTypes)
}
const TypeBlock = (props) => {
    return(
        <div className="type-box">                      
            {props.typeArr.map((item) =>(                                   
                <div className='ingredient mr-4 ml-4 mb-10 mt-6' key={item._id}>
                    <Counter count={1} size="default" extraClass="m-1" />
                    <div className='ml-4'>
                        <img  src={item.image}/>
                    </div>
                    <div className='price mt-1 mb-1'>
                        <Text text={item.price} class="mr-2 text text_type_digits-default"/>
                        <CurrencyIcon type="primary" />
                    </div>
                    <div className='name'>
                        <Text text={item.name} class="text text_type_main-default"/>  
                    </div>       
                </div>)                  
            )}        
        </div>
    )
}
Ingredients.propTypes = {
    tupeArr: PropTypes.arrayOf(dataPropTypes),
}
const Text = (props) => {
    return(
        <p className={props.class}>
            {props.text}
        </p>
    )
}


const Buttons = () => {
    const [current, setCurrent] = React.useState('one')
    return (
      <div className='vertical-menu' style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            <Text text='Булки' class="text text_type_main-default"/>         
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            <Text text='Начинка' class="text text_type_main-default"/>           
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            <Text text='Соусы' class="text text_type_main-default"/>
        </Tab>
      </div>
    )
  }

class Menu extends React.Component {
    render() {
        return(
            <div className='menu-box mt-10 mb-10'>
                <div className='menu-text mt-10'>
                    <Text text='Собери бургер' class="text text_type_main-large"/>
                </div>               
                <Buttons />
                <Ingredients arr={data}/>
                
            </div>    
              
        )
    }
}


export default Menu;