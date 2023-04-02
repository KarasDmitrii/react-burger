
import styles from '../modal/modal.module.css';
import { getAllData } from "../../services/IngredientDetails/IngredientsDtailsSelector";
import { useParams } from 'react-router-dom';
import { IIngredient } from '../../utils/types';
import { useAppSelector } from '../../hooks/hooks';



const IngredientDetails: React.FC = () => {

    const allData: Array<IIngredient> = useAppSelector(getAllData)
    const { id } = useParams<{id: string}>();
   
    let defaultiItem: IIngredient = {
        name: '',
        calories: '',
        proteins: '',
        fat: '',
        carbohydrates: '',
        image_large: '',
        image: '',
        image_mobile: '',
        _id: '',
        __v: 0,
        type: '',
        price: '',
    }
    if (allData[0]) {
        const item = allData.find(element => element._id === id) || defaultiItem;
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
    } else {
        return(<h2>Ошибка загрузки данных</h2>)
    }
};

export default IngredientDetails;