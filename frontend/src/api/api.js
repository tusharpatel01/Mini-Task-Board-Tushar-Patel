
import axios from 'axios'

const API_URL = 'http://localhost:5000'

export const getTasks = () => {
    return axios.get(`${API_URL}/read-tasks`)
}

export const addTask = (task) => {
    return axios.post(`${API_URL}/new-task`, { task })
}

export const updateTask = (updateId, task) => {
    return axios.post(`${API_URL}/update-task`, { updateId, task })
}

export const deleteTask = (id) => {
    return axios.post(`${API_URL}/delete-task`, { id })
}

export const completeTask = (id) => {
    return axios.post(`${API_URL}/complete-task`, { id })
}
