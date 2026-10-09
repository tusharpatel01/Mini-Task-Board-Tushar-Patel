
const express = require('express')
const router = express.Router()

import {
    readMiniTasks,
    CreateMiniTask,
    updateMiniTask,
    deleteTask,
    completeTask
}
from '../controller/taskContoller.js'

router.get('/read-tasks', readMiniTasks)
router.post('/new-task', CreateMiniTask)
router.post('/update-task', updateMiniTask)
router.post('/delete-task', deleteTask)
router.post('/complete-task', completeTask)

module.exports = router
