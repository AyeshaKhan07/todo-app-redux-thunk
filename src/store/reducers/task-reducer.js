import { ADD_TASK, SET_TASK_LIST, UPDATE_TASK_LIST } from "../action-type/task-types";

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload]

        case SET_TASK_LIST:
            return [...action.payload.splice(0, 10)]

        default:
            return state
    }
}