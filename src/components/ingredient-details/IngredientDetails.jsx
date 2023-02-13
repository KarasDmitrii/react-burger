
import styles from '../modal/modal.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../services/IngredientDetails/IngredientsDtailsSelector";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { loadIngredients } from '../../services/Ingredients/IngredientsActions';


const IngredientDetails = () => {

    const allData = useSelector(getAllData)
    const { id } = useParams();

    if (allData[0]) {
        const item = allData.find(element => element._id === id);
        const { name, calories, proteins, fat, carbohydrates, image_large } = item;
        return (
            <div className={styles.content}>
                <div className={`${styles.header} mr-10 ml-10 mt-10 mb-4`}>
                    <p className="text text_type_main-large">
                        Детали ингредиента
                    </p>
                </div>
                <img className={`${styles.image} ml-30 mr-30`} src={image_large} alt='ingImg' />
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
            </div>
        )
    }
};

export default IngredientDetails;