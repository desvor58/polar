import type { ASTNode } from '../runtime/types'

export interface Sprite {
  id: string
  name: string
  x: number
  y: number
  direction: number
  visible: boolean
  size: number
  costume: HTMLImageElement | null
  sayText: string
  sayType: 'say' | 'think' | null
  sayExpiry: number
  scripts: ASTNode[]
}

export function createSprite(name: string): Sprite {
  return {
    id: crypto.randomUUID(),
    name,
    x: 0,
    y: 0,
    direction: 90,
    visible: true,
    size: 100,
    costume: null,
    sayText: '',
    sayType: null,
    sayExpiry: 0,
    scripts: []
  }
}
