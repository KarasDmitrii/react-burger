import {createSelector} from 'reselect';
export const getBun = (store) => store.constructorData.bun;
export const getOtherIng = (store) => store.constructorData.otherIng;
export const getAllData = (store) => store.data.allData;
export const getIsOrdModalOpen = (store) => store.ordModal.isOrdModalOpen;
export const getPrice = createSelector(getOtherIng, getBun, (otherIng, bun) => { 
    return otherIng.reduce((prev, curr) => prev + curr.item.price, 0) + (bun.price * 2)
});
