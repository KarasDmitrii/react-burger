import { createSelector } from 'reselect';

const getBuns = (store) => store.data.buns;
const getMains = (store) => store.data.mains;
const getSauces = (store) => store.data.sauces;

const getOtherIng = (store) => store.constructorData.otherIng;
export const getBun = (store) => store.constructorData.bun;

export const getIsIngModalOpen = (store) => store.ingModal.isIngModalOpen;

export const GetIngredients = createSelector(getBuns, getMains, getSauces, (buns, mains, sauces) => {
    return {
        buns: buns,
        mains: mains,
        sauces: sauces
    }
})

export const getIngredientCounters = createSelector(getOtherIng, (otherIng) => {
    const counters = {};
    otherIng.forEach((element) => {
        if (!counters[element.item._id]) counters[element.item._id] = 0
        counters[element.item._id]++;
    });
    return counters;
})

