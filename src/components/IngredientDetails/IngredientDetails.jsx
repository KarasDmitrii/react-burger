import React from "react";
import styles from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';
import ArrPropTypes from '../../utils/PropTypes.jsx';


const IngredientDetails = ({ ingredientData, header }) => {

    const { name, calories, proteins, fat, carbohydrates, image_large } = ingredientData.item;

    return (
        <>
            <div className={`${styles.header} mr-10 ml-10 mt-10 mb-4`}>
                <p className="text text_type_main-large">
                    {header}
                </p>
                {/* <CloseIcon type="primary" onClick={onClose} /> */}
            </div>
            <img className={`${styles.image} ml-30 mr-30`} src={image_large} />
            <div className={styles.name}>
                <p className="text text_type_main-medium" >
                    {name}
                </p>
            </div>

            <div className={`${styles.box} mt-8 mb-15`}>
                <div className={styles.stat}>
                    <p className="text text_type_main-default text_color_inactive" >
                        Калории,ккал
                    </p>
                    <p className='text text_type_digits-default text_color_inactive' >
                        {calories}
                    </p>
                </div>
                <div className={styles.stat}>
                    <p className="text text_type_main-default text_color_inactive" >
                        Белки, г
                    </p>
                    <p className='text text_type_digits-default text_color_inactive' >
                        {proteins}
                    </p>
                </div>
                <div className={styles.stat}>
                    <p className="text text_type_main-default text_color_inactive" >
                        Жиры, г
                    </p>
                    <p className='text text_type_digits-default text_color_inactive' >
                        {fat}
                    </p>
                </div>
                <div className={styles.stat}>
                    <p className="text text_type_main-default text_color_inactive" >
                        Белки, г
                    </p>
                    <p className='text text_type_digits-default text_color_inactive' >
                        {carbohydrates}
                    </p>
                </div>
            </div>
        </>
    )
};
IngredientDetails.propTypes = {
    item: PropTypes.objectOf(ArrPropTypes.isRequired),
    onClose: PropTypes.func
};
export default IngredientDetails;