import { createSelector } from 'reselect';
import { TRootState } from '../..';
import { IIngWithKey} from '../../utils/types';

const getBuns = (store: TRootState) => store.data.buns;
const getMains = (store: TRootState) => store.data.mains;
const getSauces = (store: TRootState) => store.data.sauces;
const getisApiLoad = (store: TRootState) => store.data.isApiLoad;
const getOtherIng = (store: TRootState) => store.constructorData.otherIng;
export const getBun = (store: TRootState) => store.constructorData.bun;
export const getIsIngModalOpen = (store: TRootState) => store.ingModal.isIngModalOpen;

export const GetIngredients = createSelector(getBuns, getMains, getSauces, getisApiLoad, (buns, mains, sauces, isApiLoad) => {
    return{
        buns: buns,
        mains: mains,
        sauces: sauces,
        isApiLoad: isApiLoad
    }
})

export const getIngredientCounters = createSelector(getOtherIng, (otherIng) => {
    const counters: {[key: string]: number} = {"": 0};
    otherIng.forEach((element: IIngWithKey) => {
        if (!counters[element.item._id]) counters[element.item._id] = 0;
        counters[element.item._id]++;
    });
    return counters;
})



