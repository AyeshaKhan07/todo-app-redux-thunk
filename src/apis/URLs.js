import { API_BASE_URL } from "../constant";

export const TODO_APP_URL = {
    TASK_LIST: `${API_BASE_URL}/todos`,
    REMOVE_TASK: (id) => `${API_BASE_URL}/todos/${id}`
}
