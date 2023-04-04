import { useAppSelector } from "../../hooks/hooks";
import { IIngredient, TWsRespOrder } from "../../utils/types";
import styles from './order-info-modal.module.css';
import { getAllData } from "../../services/Constructor/ConstructorSelectors";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getTimeElapsed } from "../../utils/GetTimeElapsed";
export const OrderInfoModal: React.FC<{ data: TWsRespOrder | undefined }> = ({ data }) => {
    const storeIngredients = useAppSelector(getAllData);
    let addedObj: {[key:string]: boolean} = {};
    const ingredients = data?.ingredients?.reduce((acc: Array<IIngredient>, item) => {

            let ing = storeIngredients.find((elem) => elem._id === item);
            if (ing) {
                if (!addedObj[item]) {
                    acc.push(ing)
                    addedObj[item] = true;
                }
            };
            return acc
        }, [])
    function countIngs(id: string) {
        return data?.ingredients.reduce((count, item) => {
            if (item === id) {
                
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
                {ingredients?.map((item, index) => {
                    return (
                        <div className={styles.listIng} key={index}>
                            <div className={styles.ingCircle}><img alt={data?.name} style={{ height: '64px', width: '128px' }} src={item.image} /></div>
                            <div className={`${styles.ingName} ml-4`}><p className="text text_type_main-default">{item?.name}</p></div>
                            <div className={styles.price}><p className="text text_type_digits-default mr-6">{item.type === 'bun' ? `2 x ${item?.price}` : `${countIngs(item._id)} x ${item?.price}` }<CurrencyIcon type="primary" /></p></div>
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