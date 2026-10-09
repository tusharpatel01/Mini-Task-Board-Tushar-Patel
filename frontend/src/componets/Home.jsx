
import React, { useEffect, useState } from 'react'



import {
    getTasks,
    addTask as createTask,
    updateTask as editTask,
    deleteTask as removeTask,
    completeTask as markTaskComplete
} from '../api/api.js'

import TaskList from './TaskList.jsx'
import TaskTabs from './TaskTabs.jsx'
import TaskForm from './TaskForm.jsx'

const Home = () => {
    const [tab, setTab] = useState(1)
    const [task, setTask] = useState('')
    const [todos, setTodos] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [updateId, setUpdateId] = useState(null)

    useEffect(() => {
        getTasks()
            .then((res) => setTodos(res.data))
            .catch((err) => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!task.trim()) {
            return
        }

        const request = isEdit
            ? editTask(updateId, task)
            : createTask(task)

        request
            .then((res) => {
                setTodos(res.data)
                setTask('')
                setIsEdit(false)
                setUpdateId(null)
            })
            .catch((err) => console.log(err))
    }

    const handleEdit = (id, taskName) => {
        setTask(taskName)
        setUpdateId(id)
        setIsEdit(true)
    }

    const handleCancel = () => {
        setTask('')
        setUpdateId(null)
        setIsEdit(false)
    }

    const handleDelete = (id) => {
        removeTask(id)
            .then((res) => setTodos(res.data))
            .catch((err) => console.log(err))
    }

    const handleComplete = (id) => {
        markTaskComplete(id)
            .then((res) => setTodos(res.data))
            .catch((err) => console.log(err))
    }

    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <div className="flex flex-col items-center px-4 py-12">
                <h2 className="font-bold text-2xl mb-5">
                    Mini Task Board
                </h2>

                <TaskForm
                    task={task}
                    setTask={setTask}
                    isEdit={isEdit}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                />

                <TaskTabs
                    tab={tab}
                    setTab={setTab}
                />

                <TaskList
                    todos={todos}
                    tab={tab}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onComplete={handleComplete}
                />
            </div>
        </div>
    )
}

export default Home
