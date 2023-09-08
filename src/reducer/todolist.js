import { ACT_ADD, ACT_DELETE, ACT_EDIT } from "../constrains";

const initialsate = JSON.parse(localStorage.getItem("jobs")) || []
export const todolist = (state = initialsate, action) => {
    console.log(state);
    switch (action.type) {
        case ACT_ADD:
            localStorage.setItem("jobs", JSON.stringify([...state, action.payload]))
            return [...state, action.payload]
        case ACT_DELETE:
            const newState = state.filter(e => e.id != action.payload)
            localStorage.setItem("jobs", JSON.stringify(newState))
            return newState
        case ACT_EDIT:
            let editState = state
            const iState = editState.findIndex(e => e.id == action.payload)
            editState[iState].status = !editState[iState].status
            localStorage.setItem("jobs", JSON.stringify(editState))
            return editState
        default:
            return state
    }
}
