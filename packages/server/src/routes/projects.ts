import { Router } from 'express'
import { listProjects, getProject, saveProject, deleteProject } from '../storage/fs.js'

export const projectsRouter = Router()

projectsRouter.get('/', async (_req, res) => {
  const projects = await listProjects()
  res.json(projects)
})

projectsRouter.get('/:id', async (req, res) => {
  const project = await getProject(req.params.id)
  if (!project) return res.status(404).json({ error: 'Not found' })
  res.json(project)
})

projectsRouter.post('/', async (req, res) => {
  const project = await saveProject(crypto.randomUUID(), req.body)
  res.status(201).json(project)
})

projectsRouter.put('/:id', async (req, res) => {
  const project = await saveProject(req.params.id, req.body)
  res.json(project)
})

projectsRouter.delete('/:id', async (req, res) => {
  await deleteProject(req.params.id)
  res.status(204).end()
})
