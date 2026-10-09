
import React from 'react'

const TaskForm = ({
    task,
    setTask,
    isEdit,
    onSubmit,
    onCancel
}) => {
    return (
        <form onSubmit={onSubmit} className="flex gap-3">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task"
                className="w-64 p-2 outline-none border border-blue-300 rounded-md"
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
                {isEdit ? 'Update' : 'Add'}
            </button>

            {isEdit && (
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-gray-500 text-white px-3 py-2 rounded-md"
                >
                    Cancel
                </button>
            )}
        </form>
    )
}

export default TaskForm
