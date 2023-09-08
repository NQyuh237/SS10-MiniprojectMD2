import { ACT_CLEAR, ACT_RANDOM, } from "../constrains/index"

const initialsate = [];
export const random = (state = initialsate, action) => {
    // console.log(action);
    switch (action.type) {
        case ACT_RANDOM:
            return [...state, action.payload];
        case ACT_CLEAR:
            return [];
        default:
            return state;
    };
};