import {createSelector} from 'reselect';
import { TRootState } from '../..';


const getModalItem = (store: TRootState) => store.data.allData;
export const getAllData = createSelector(getModalItem, ( allData ) => {
    return allData;
    
})