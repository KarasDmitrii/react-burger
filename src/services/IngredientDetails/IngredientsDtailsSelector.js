import {createSelector} from 'reselect';

const getModalItem = (store) => store.data.allData;
export const getAllData = createSelector(getModalItem, ( allData ) => {
    return allData;
    
})