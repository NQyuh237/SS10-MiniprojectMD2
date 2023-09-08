import { ACT_CONG, ACT_TRU } from "../constrains/index"
const initialsate = 0;
export const count = (state = initialsate, action) => {
    switch (action.type) {
        case ACT_CONG:
            return state + 1;
        case ACT_TRU:
            return state - 1;
        default:
            return state;
    }
};