import express from 'express'
import cors from 'cors'
import { projectsRouter } from './routes/projects.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use('/api/projects', projectsRouter)

app.listen(PORT, () => {
  console.log(`Polar server running on http://localhost:${PORT}`)
})
