
import React from 'react'

const TaskTabs = ({ tab, setTab }) => {
    return (
        <div className="flex text-sm w-80 justify-evenly mt-4">
            <button
                onClick={() => setTab(1)}
                className={tab === 1 ? 'text-blue-700 font-semibold' : 'text-black'}
            >
                All
            </button>

            <button
                onClick={() => setTab(2)}
                className={tab === 2 ? 'text-blue-700 font-semibold' : 'text-black'}
            >
                Active
            </button>

            <button
                onClick={() => setTab(3)}
                className={tab === 3 ? 'text-blue-700 font-semibold' : 'text-black'}
            >
                Completed
            </button>
        </div>
    )
}

export default TaskTabs
