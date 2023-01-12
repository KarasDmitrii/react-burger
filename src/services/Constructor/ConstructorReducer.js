import update from 'immutability-helper';
import {
    ADD_ITEM,
    ADD_BUN,
    DELETE_ITEM,
    MOVE_CARD
} from './ConstructorActions';
const initialState = {

    bun: {},
    otherIng: [],
}
export const ConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            return {
                ...state,
                otherIng: [
                    ...state.otherIng,
                    action.payload
                ],
            }
        };
        case DELETE_ITEM:
            return {
                ...state,
                otherIng: [...state.otherIng].filter(elem => elem.key !== action.payload)
            };
        case ADD_BUN: {
            return {
                ...state,
                bun: action.payload
            }
        };
        case MOVE_CARD: {
            const otherIng = [...state.otherIng]
            const newOtherIng = update(otherIng, {
                $splice: [
                    [action.dragIndex, 1],
                    [action.hoverIndex, 0, otherIng[action.dragIndex]],
                ],
            })
            return {
                ...state,
                otherIng: newOtherIng
            }
        };
        default:
            return state;
    }
}
