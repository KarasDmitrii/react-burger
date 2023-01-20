import { createSelector } from 'reselect';
export const getBun = (store) => store.constructorData.bun;
export const getOtherIng = (store) => store.constructorData.otherIng;
export const getAllData = (store) => store.data.allData;
export const getPrice = createSelector(getOtherIng, getBun, (otherIng, bun) => {
    var price = otherIng.reduce((prev, curr) => prev + curr.item.price, 0) + (bun.price * 2)
    return price ? price : 0;
});
export const composeOrder = (otherIng, bun) => {
    const order = otherIng.map(elem => elem.item._id)
    order.push(bun._id)
    return {
        "ingredients": order
    }
}