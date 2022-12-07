import { render } from '@testing-library/react';
import { Button, Tab, BurgerIcon, Typography, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
class NavBar extends React.Component {
    render() {
        return (
            <header className='header  mt-10'>
                {this.props.children}
            </header>    
        )
    }
}
class HeadButton extends React.Component {
    render() {
        return(
    
            <Button className='menu-button mr-2'>
               <>
                {this.props.icon} <p className={this.props.textStyle} >{this.props.text} </p>
               </>

            </Button> 
        )
    }
}
class Box extends React.Component {
    render(){    
        return(
            <div className='box-header'>   
                <div className='button-box m-4'>                       
                    {this.props.children}            
                </div>
            </div>
        )
    }    
}
class Header extends React.Component {
    render() {
        return(
            <NavBar>
                <Box>
                    <HeadButton icon={<BurgerIcon type="primary" />} textStyle='text text_type_main-small ml-2' text=' Конструктор'/>
                    <HeadButton icon={<ListIcon type="secondary" />} textStyle='text text_type_main-small text_color_inactive ml-2' text=' Лента заказов'/>  
                </Box>
                <div className='box-logo'>
                    <div className='logo mb-6 mt-6'>
                        <Logo />   
                    </div>
                </div>
                <div className='box-lc'>
                    <div className='lc-button'>
                        <HeadButton icon={<ProfileIcon type="secondary" />} textStyle='text text_type_main-small text_color_inactive ml-2' text='Личный кабинет'/>                                                                           
                    </div>
                </div>    
           </NavBar>
        )
    }        
}
export default Header;