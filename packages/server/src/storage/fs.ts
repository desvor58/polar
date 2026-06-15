import { readFile, writeFile, readdir, unlink, mkdir } from 'fs/promises'
import { join } from 'path'

const PROJECTS_DIR = join(process.cwd(), 'projects')

async function ensureDir() {
  await mkdir(PROJECTS_DIR, { recursive: true })
}

export async function listProjects() {
  await ensureDir()
  const files = await readdir(PROJECTS_DIR)
  const projects = []
  for (const file of files) {
    if (!file.endsWith('.json')) continue
    const id = file.replace('.json', '')
    const content = await readFile(join(PROJECTS_DIR, file), 'utf-8')
    const data = JSON.parse(content)
    projects.push({ id, name: data.name || id, updatedAt: data.updatedAt })
  }
  return projects
}

export async function getProject(id: string) {
  try {
    const content = await readFile(join(PROJECTS_DIR, `${id}.json`), 'utf-8')
    return { id, ...JSON.parse(content) }
  } catch {
    return null
  }
}

export async function saveProject(id: string, data: any) {
  await ensureDir()
  const project = { ...data, id, updatedAt: new Date().toISOString() }
  await writeFile(join(PROJECTS_DIR, `${id}.json`), JSON.stringify(project, null, 2))
  return project
}

export async function deleteProject(id: string) {
  await unlink(join(PROJECTS_DIR, `${id}.json`)).catch(() => {})
}
