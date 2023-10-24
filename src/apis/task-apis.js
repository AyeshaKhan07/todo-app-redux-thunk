import axios from "axios"
import { TODO_APP_URL } from "./URLs"

const getTaskList = async() => {
    return axios.get(TODO_APP_URL.TASK_LIST);
}

const addTask = async(payload) => {
    return axios.post(TODO_APP_URL.TASK_LIST, payload);
}

export default {
    getTaskList,
    addTask
}