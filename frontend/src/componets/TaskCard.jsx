
import React from 'react'

const TaskCard = ({ todo, onEdit, onDelete, onComplete }) => {
    return (
        <div className="flex justify-between bg-white p-3 w-full rounded-md shadow-sm">
            <div className="min-w-0">
                <p className="text-lg font-semibold break-words">
                    {todo.task}
                </p>

                <p className="text-xs text-gray-600 mt-1">
                    {new Date(todo.createdAt).toLocaleDateString()}
                </p>

                <p className="text-sm text-gray-700 mt-1">
                    Status: {todo.status}
                </p>
            </div>

            <div className="flex flex-col items-start text-sm ml-4 shrink-0">
                {todo.status !== 'completed' && (
                    <>
                        <button
                            onClick={() => onEdit(todo.id, todo.task)}
                            className="text-blue-600"
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => onComplete(todo.id)}
                            className="text-green-600"
                        >
                            Complete
                        </button>
                    </>
                )}

                <button
                    onClick={() => onDelete(todo.id)}
                    className="text-red-500"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TaskCard
