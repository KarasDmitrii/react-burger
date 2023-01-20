import {createSelector} from 'reselect';
const getHeader = (store) => store.ingModal.header;
const getModalItem = (store) => store.ingModal.item;
export const getIngredientDetails = createSelector(getHeader, getModalItem, (header, item) => {
    return {
        header: header,
        item: item
    }
})