import data from "../../utils/data";
import React from "react";
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
const Mains = (props) => {
    return(
        props.ing.map((item) => {
            return(
                <div className="m-4 mains" key={item._id}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                    />
                </div>    
            )
        })
    )
} 
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
class Burger extends React.Component {
    
      //price: this.props.arrr.map((item) => {price += item.price}),
data = this.props.arr;     
bun = data.filter(word => word.type === "bun");
souse = data.filter(word => word.type === "sauce");
main = data.filter(word => word.type === "main");
price1 = 0;
    PriceButton = () => {
        
        
        this.data.map((item) => {
            this.price1 += item.price
            });
        
            return(
                <div className="price-button mr-6">
                    <div className="price-fin mr-10">
                        <Text text={this.price1} class="text text_type_digits-medium"/>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button htmlType="button" type="primary" size="medium">
                        <Text text="Оформить заказ" class="text text_type_main-default"/>
                    </Button>
                </div>
        
        
            )
        }
  
    render() {
      
      return (
          <div style={{display: 'flex', position:'relative'}}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className="ml-10 mr-4">    
                  <ConstructorElement
                  type="top"
                  isLocked={true}
                  text="Краторная булка N-200i (верх)"
                  price={200}
                  thumbnail={this.bun.find(element => element.name === 'Краторная булка N-200i').image}
                  />
              </div>
              <div className="mains-list custom-scroll" >
                  <Mains ing={this.main}/>
              </div>
              <div className="ml-10 mr-4 mb-10"> 
                  <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text="Краторная булка N-200i (низ)"
                  price={200}
                  thumbnail={this.bun.find(element => element.name === 'Краторная булка N-200i').image}
                  />
              </div>
              <this.PriceButton/>    
              </div>
          </div>    
      )                          
  }
}
Burger.propTypes = {
    arr: PropTypes.arrayOf(dataPropTypes)
}

const Text = (props) => {
    return(
        <p className={props.class}>
            {props.text}
        </p>
    )
}

class BurgerConstructor extends React.Component {
    render() {
        return(
        <>
            <div className="constructor-box mt-25">         
                <Burger arr={data}/>
                
            </div>
            
        </>
            
        )
    
    }
}
export default BurgerConstructor;