import { useAppSelector } from "../../hooks/hooks";
import { IIngredient, TWsRespOrder } from "../../utils/types";
import styles from './order-info-modal.module.css';
import { getAllData } from "../../services/Constructor/ConstructorSelectors";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getTimeElapsed } from "../../utils/GetTimeElapsed";
export const OrderInfoModal: React.FC<{ data: TWsRespOrder | undefined }> = ({ data }) => {
    const storeIngredients = useAppSelector(getAllData);
    const ingredients = data?.ingredients?.reduce((acc: Array<IIngredient>, item) => {
        let ing = storeIngredients.find((elem) => elem._id === item);
        if (ing) acc.push(ing);
        return acc
    }, []);
    function countIngs(arr: Array<IIngredient>, obj: IIngredient) {
        return arr.reduce((count, item) => {
            if (item._id === obj._id) {
                count++;
            }
            return count;
        }, 0);
    }
    const price = ingredients?.reduce((acc, item) => {
        return acc + Number(item.price);
    }, 0)
    return (
        <div className={styles.contentBlock}>
            <div className={styles.header}>
                <p className="text text_type_digits-default">{`#${data?.number}`}</p>
            </div>
            <div className={`${styles.name} mt-10`}>
                <p className="text text_type_main-medium">
                    {data?.name}
                </p>
            </div>
            <div className={`${styles.status} mt-3`}>
                <p className="text text_type_main-default" style={{ color: '#00CCCC' }}>
                    {data?.status === 'created' ? 'Создан' : data?.status === 'pending' ? 'Готовится' : 'Выполнен'}
                </p>
            </div>
            <p className="text text_type_main-medium mt-10">
                Состав:
            </p>
            <li className={`${styles.list} custom-scroll`} >
                {ingredients?.map((item) => {
                    return (
                        <div className={styles.listIng} key={crypto.randomUUID()}>
                            <div className={styles.ingCircle}><img alt={data?.name} style={{ height: '64px', width: '128px' }} src={item.image} /></div>
                            <div className={`${styles.ingName} ml-4`}><p className="text text_type_main-default">{item?.name}</p></div>
                            <div className={styles.price}><p className="text text_type_digits-default mr-6">{`${countIngs(ingredients, item)} x ${item?.price}`} <CurrencyIcon type="primary" /></p></div>
                        </div>
                    )
                })}
            </li>
            <div className={styles.footer}>
                <p className="text text_type_main-default text_color_inactive">
                    {getTimeElapsed(data?.createdAt || '') + ' i-GMT+3'}
                </p>
                <p className="text text_type_digits-default mr-6">
                    {price}
                    <CurrencyIcon type="primary" />
                </p>
            </div>
        </div>
    );
};