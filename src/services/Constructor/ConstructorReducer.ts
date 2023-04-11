import update from 'immutability-helper';
import {
    ADD_ITEM,
    ADD_BUN,
    DELETE_ITEM, 
    MOVE_CARD,
    COMPOSE_ORDER
} from './ConstructorActions';
import { IConstructorInitialState, TConstructorActions } from './ConstructorTypes';

export const constructorInitialState: IConstructorInitialState = {
    bun: null,
    otherIng: [],
    order: { "ingredients": [] }
}

export const сonstructorReducer = (state = constructorInitialState, action: TConstructorActions): IConstructorInitialState => {
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
                bun: action.payload.item
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
            const order = state.otherIng?.map(elem => elem.item._id)
            if (state.bun) order.push(state.bun._id)
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
