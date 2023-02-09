import { createSelector } from 'reselect';

const getBuns = (store) => store.data.buns;
const getMains = (store) => store.data.mains;
const getSauces = (store) => store.data.sauces;
const getisApiLoad = (store) => store.data.isApiLoad;

const getOtherIng = (store) => store.constructorData.otherIng;
export const getBun = (store) => store.constructorData.bun;

export const getIsIngModalOpen = (store) => store.ingModal.isIngModalOpen;

export const GetIngredients = createSelector(getBuns, getMains, getSauces, getisApiLoad, (buns, mains, sauces, isApiLoad) => {
    return{
        buns: buns,
        mains: mains,
        sauces: sauces,
        isApiLoad: isApiLoad
    }
})





export const getIngredientCounters = createSelector(getOtherIng, (otherIng) => {
    const counters = {};
    otherIng.forEach((element) => {
        if (!counters[element.item._id]) counters[element.item._id] = 0;
        counters[element.item._id]++;
    });
    return counters;
})



