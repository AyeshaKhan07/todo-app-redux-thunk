import { ADD_TASK } from "../action-type/task-types";

const initialState = ["Task1", "Task2"];

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload]
    
        default:
            return state
    }
}