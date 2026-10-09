
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import taskRoutes from './routes/taskRoutes.js'


dotenv.config()


const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Mini Task Board API is running')
})

app.use('/', taskRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

