import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const dataPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
});

const TypeBlock = ({typeArr, setItem, OpenModal}) => {
    return (
        <>
            <div className="type-box">
                {typeArr.map((item) => (
                    <div className='ingredient mr-4 ml-4 mb-10 mt-6' key={item._id}
                        onClick={() => {
                        setItem({item});
                        OpenModal();
                        console.log('click');
                        }}>
                        <Counter count={1} size="default" extraClass="m-1" />
                        <div className='ml-4'>
                            <img src={item.image} />
                        </div>
                        <div className='price mt-1 mb-1'>
                            <p className="text text_type_main-default" >
                                {item.price}
                            </p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <div className='name'>
                            <p className="text text_type_main-default" >
                                {item.name}
                            </p>
                        </div>                      
                    </div>)
                )}
            </div>             
        </>    
    )
};
TypeBlock.propTypes = {
    typeArr: PropTypes.arrayOf(dataPropTypes).isRequired
};
export default TypeBlock;