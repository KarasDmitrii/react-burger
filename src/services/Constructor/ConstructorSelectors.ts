import { createSelector } from 'reselect'
import { TRootState } from '../..';
import { IIngredient, IIngWithKey} from '../../utils/types';



export const getBun = (store: TRootState) => store.constructorData.bun;
export const getOtherIng = (store: TRootState) => store.constructorData.otherIng;
export const getAllData = (store: TRootState) => store.data.allData;
export const getIsOrdModalOpen = (store: TRootState) => store.ordModal.isOrdModalOpen;
export const getIsOrdLoading = (store: TRootState) => store.ordModal.isOrdLoading;
export const activeUser = (store: TRootState) => store.user.activeUser;
export const getPrice = createSelector(getOtherIng, getBun, (otherIng, bun) => {
    var price = otherIng.reduce((prev: number, curr: IIngWithKey) => prev + Number(curr.item.price), 0) + (Number(bun?.price) * 2)
    return price ? price : 0;
});
export const composeOrder = (otherIng: Array<IIngWithKey>, bun: IIngredient) => {
    const order = otherIng.map(elem => elem.item._id)
    order.push(bun._id)
    return {
        "ingredients": order
    }
}