
import React from 'react'
import TaskCard from './TaskCard'

const TaskList = ({
    todos,
    tab,
    onEdit,
    onDelete,
    onComplete
}) => {
    const filteredTodos = todos.filter((todo) => {
        if (tab === 2) {
            return todo.status === 'active'
        }

        if (tab === 3) {
            return todo.status === 'completed'
        }

        return true
    })

    if (filteredTodos.length === 0) {
        return (
            <p className="text-gray-500 mt-6">
                {tab === 2
                    ? 'No active tasks'
                    : tab === 3
                    ? 'No completed tasks'
                    : 'No tasks found'}
            </p>
        )
    }

    return (
        <div className="w-full max-w-sm flex flex-col gap-3 mt-4">
            {filteredTodos.map((todo) => (
                <TaskCard
                    key={todo.id}
                    todo={todo}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onComplete={onComplete}
                />
            ))}
        </div>
    )
}

export default TaskList
