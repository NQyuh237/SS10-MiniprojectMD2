import { ACT_CONG, ACT_RANDOM, ACT_TRU, ACT_CLEAR, ACT_ADD, ACT_DELETE, ACT_EDIT } from "../constrains"

export const actionTypes = () => {
    return {
        type: ACT_CONG,
    }
}
export const deActionTypes = () => {
    return {
        type: ACT_TRU,
    }
}

export const actionRandom = () => {
    return {
        type: ACT_RANDOM,
        payload: Math.round(Math.random() * 8999999) + 1000000,
    }
}
export const actionClear = () => {
    return {
        type: ACT_CLEAR,
    }
}
export const actionAdd = (e) => {
    return {
        type: ACT_ADD,
        payload: e,
    }
}
export const actionDele = (e) => {
    return {
        type: ACT_DELETE,
        payload: e,
    }
}
export const actionEdit = (e) => {
    return {
        type: ACT_EDIT,
        payload: e,
    }
}
