import React from "react";
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

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

const IngredientDetails = ({ingredientData, onClose, header}) => {

    const { name, calories, proteins, fat, carbohydrates, image_large } = ingredientData.item;

    return (
        <>
            
            
            <div className="modal-ingredient">
                <div className="modal-header mr-10 ml-10 mt-10 mb-4">
                    <p className="text text_type_main-large">
                        {header}
                    </p>
                    <CloseIcon type="primary" onClick={onClose} />
                </div>
                <img className="modal-image ml-30 mr-30" src={image_large} />
                <div className="modal-name">
                    <p  className="text text_type_main-medium" >
                        {name}
                    </p>
                </div>

                <div className="modal-stat-box mt-8 mb-15">
                    <div className="model-stat">
                        <p  className="text text_type_main-default text_color_inactive" >
                            Калории,ккал
                        </p>
                        <p  className='text text_type_digits-default text_color_inactive' >
                            {calories}
                        </p>
                    </div>
                    <div className="model-stat">
                        <p  className="text text_type_main-default text_color_inactive" >
                            Белки, г
                        </p>
                        <p  className='text text_type_digits-default text_color_inactive' >
                            {proteins} 
                        </p>
                    </div>
                    <div className="model-stat">
                        <p  className="text text_type_main-default text_color_inactive" >
                            Жиры, г
                        </p>
                        <p  className='text text_type_digits-default text_color_inactive' >
                            {fat}
                        </p>
                    </div>
                    <div className="model-stat">
                        <p  className="text text_type_main-default text_color_inactive" >
                            Белки, г
                        </p>
                        <p  className='text text_type_digits-default text_color_inactive' >
                            {carbohydrates}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};
IngredientDetails.propTypes = {
    item: PropTypes.arrayOf(dataPropTypes).isRequired,
    onClose: PropTypes.func.isRequired
};
export default IngredientDetails;