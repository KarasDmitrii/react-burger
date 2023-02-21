import update from 'immutability-helper';
import {
    ADD_ITEM,
    ADD_BUN,
    DELETE_ITEM,
    MOVE_CARD,
    COMPOSE_ORDER
} from './ConstructorActions';

const initialState = {
    bun: {},
    otherIng: [],
    order: { "ingredients": [] }
}

export const сonstructorReducer = (state = initialState, action) => {
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
        case COMPOSE_ORDER:
            const order = state.otherIng.map(elem => elem.item._id)
            order.push(state.bun._id)
            return {
                ...state,
                order: {
                    "ingredients": order
                }
            }
        default:
            return state;
    }
}
