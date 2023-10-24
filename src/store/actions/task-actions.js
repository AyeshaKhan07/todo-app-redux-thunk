import taskApis from "../../apis/task-apis"
import { ADD_TASK, SET_TASK_LIST, UPDATE_TASK_LIST } from "../action-type/task-types";

export default {
    getTaskList() {
        return async dispatch => {
            try {
                const response = await taskApis.getTaskList();
                dispatch(this.setTaskList(response.data))
            } catch (error) {
                console.log(error)
            }
        }
    },

    setTaskList(taskList) {
        return { type: SET_TASK_LIST, payload: taskList }
    },

    updateTaskList(type, task) {
        return { type: type, payload: task }
    },

    addTask(payload) {
        return async dispatch => {
            try {
                const response = await taskApis.addTask(payload);
                dispatch(this.updateTaskList(ADD_TASK, response.data))
            } catch (error) {
                console.log(error)
            }
        }
    }

}