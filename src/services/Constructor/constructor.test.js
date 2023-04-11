import { nullIngredient } from "../../utils/types";
import { ADD_BUN, ADD_ITEM, DELETE_ITEM, COMPOSE_ORDER, MOVE_CARD, addItem } from "./ConstructorActions";
import { constructorInitialState, сonstructorReducer } from "./ConstructorReducer";
const itemWithKey = { item: nullIngredient, key: '1' }

describe('Action creators', () => {
    it('should create an action with correct ingredient', () => {
        const item = { item: {
            _id: '',
            name: '',
            type: 'main',
            fat: '',
            carbohydrates: '',
            proteins: '',
            calories: '',
            price: '',
            image: '',
            image_mobile: '',
            image_large: '',
            __v: 0
        }, key: '1' };
        const bunItem = { item: {
            _id: '',
            name: '',
            type: 'bun',
            fat: '',
            carbohydrates: '',
            proteins: '',
            calories: '',
            price: '',
            image: '',
            image_mobile: '',
            image_large: '',
            __v: 0
        }, key: '1' };

        const expectedAddBunAction = {
            type: ADD_BUN,
            payload: bunItem
        }
        const expectedAddItemAction = {
            type: ADD_ITEM,
            payload: item
        }

        expect(addItem(item)).toEqual(expectedAddItemAction)
        expect(addItem(bunItem)).toEqual(expectedAddBunAction)
    })
})


describe('constructor reducer', () => {
    it('should return the initial state', () => {
        expect(сonstructorReducer(undefined, {})).toEqual(constructorInitialState);
    });

    it('should handle ADD_ITEM action', () => {


        expect(сonstructorReducer(undefined, {
            type: ADD_ITEM,
            payload: itemWithKey
        })).toEqual({
            bun: null,
            otherIng: [itemWithKey],
            order: { "ingredients": [] },
        });
    });

    it('should handle MOVE_CARD', () => {
        const state = {
            bun: null,
            order: { "ingredients": [] },
            otherIng: [
                { key: '1', item: { _id: '123', name: 'Test Ingredient 1', type: 'test' } },
                { key: '2', item: { _id: '456', name: 'Test Ingredient 2', type: 'test' } }
            ],
        };
        expect(сonstructorReducer(state, { type: MOVE_CARD, dragIndex: 0, hoverIndex: 1 })).toEqual({
            order: { "ingredients": [] },
            bun: null,
            otherIng: [
                { key: '2', item: { _id: '456', name: 'Test Ingredient 2', type: 'test' } },
                { key: '1', item: { _id: '123', name: 'Test Ingredient 1', type: 'test' } },
            ],
        });
    });

    it('should handle COMPOSE_ORDER', () => {
        const state = {
            order: { "ingredients": [] },
            bun: { _id: '1', name: 'Test Bun' },
            otherIng: [
                { key: '1', item: { _id: '123', name: 'Test Ingredient 1', type: 'test' } },
                { key: '2', item: { _id: '456', name: 'Test Ingredient 2', type: 'test' } }
            ],
        };
        expect(сonstructorReducer(state, { type: COMPOSE_ORDER })).toEqual({
            order: { "ingredients": [] },
            bun: { _id: '1', name: 'Test Bun' },
            otherIng: [
                { key: '1', item: { _id: '123', name: 'Test Ingredient 1', type: 'test' } },
                { key: '2', item: { _id: '456', name: 'Test Ingredient 2', type: 'test' } }
            ],
            order: { ingredients: ['123', '456', '1'] },
        });
    });
    it('should handle DELETE_ITEM', () => {
        const state = {
                    bun: null,
                    otherIng: [itemWithKey],
                    order: { "ingredients": [] }
                }
        expect(
            сonstructorReducer(state,
                {
                    type: DELETE_ITEM,
                    payload: itemWithKey.key
                })
        ).toEqual(
            {
                bun: null,
                otherIng: [],
                order: { "ingredients": [] }
            }
        )
    })
});



