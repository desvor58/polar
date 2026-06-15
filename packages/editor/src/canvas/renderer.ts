import type { Sprite } from './sprite'
import type { PenState } from '../runtime/engine'

const STAGE_WIDTH = 480
const STAGE_HEIGHT = 360

export class Renderer {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private animFrameId = 0
  private sprites: Sprite[] = []
  private visibleVars: Map<string, number | string | boolean> = new Map()
  private pen: PenState | null = null

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.canvas.width = STAGE_WIDTH
    this.canvas.height = STAGE_HEIGHT
    this.ctx = canvas.getContext('2d')!
  }

  setSprites(sprites: Sprite[]) {
    this.sprites = sprites
  }

  setVisibleVariables(vars: Map<string, number | string | boolean>) {
    this.visibleVars = vars
  }

  setPen(pen: PenState) {
    this.pen = pen
  }

  start() {
    const render = () => {
      this.draw()
      this.animFrameId = requestAnimationFrame(render)
    }
    this.animFrameId = requestAnimationFrame(render)
  }

  stop() {
    cancelAnimationFrame(this.animFrameId)
  }

  private draw() {
    const ctx = this.ctx

    ctx.fillStyle = '#f0f0f0'
    ctx.fillRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT)

    ctx.save()
    ctx.translate(STAGE_WIDTH / 2, STAGE_HEIGHT / 2)
    ctx.scale(1, -1)

    // Draw pen lines
    if (this.pen) {
      for (const line of this.pen.lines) {
        ctx.strokeStyle = line.color
        ctx.lineWidth = line.size
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(line.x1, -line.y1)
        ctx.lineTo(line.x2, -line.y2)
        ctx.stroke()
      }

      // Draw stamps
      for (const stamp of this.pen.stamps) {
        const size = 40 * (stamp.size / 100)
        ctx.save()
        ctx.translate(stamp.x, -stamp.y)
        ctx.rotate((stamp.direction - 90) * Math.PI / 180)
        ctx.globalAlpha = 0.5
        this.drawDefaultSprite(ctx, size)
        ctx.globalAlpha = 1
        ctx.restore()
      }
    }

    for (const sprite of this.sprites) {
      if (!sprite.visible) continue
      this.drawSprite(sprite)
    }

    ctx.restore()

    for (const sprite of this.sprites) {
      if (!sprite.visible || !sprite.sayText) continue
      this.drawSpeechBubble(sprite)
    }

    this.drawVisibleVariables()
  }

  private drawSprite(sprite: Sprite) {
    const ctx = this.ctx
    const size = 40 * (sprite.size / 100)

    ctx.save()
    ctx.translate(sprite.x, -sprite.y)
    ctx.rotate((sprite.direction - 90) * Math.PI / 180)

    if (sprite.costume) {
      const aspect = sprite.costume.width / sprite.costume.height
      const w = size * aspect
      const h = size
      ctx.drawImage(sprite.costume, -w / 2, -h / 2, w, h)
    } else {
      this.drawDefaultSprite(ctx, size)
    }

    ctx.restore()
  }

  private drawDefaultSprite(ctx: CanvasRenderingContext2D, size: number) {
    const half = size / 2

    // Body
    ctx.fillStyle = '#ff6b6b'
    ctx.beginPath()
    ctx.ellipse(0, 0, half * 0.9, half * 0.7, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = '#c0392b'
    ctx.lineWidth = 2
    ctx.stroke()

    // Eye
    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.ellipse(half * 0.35, -half * 0.15, half * 0.22, half * 0.25, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = '#333'
    ctx.lineWidth = 1.5
    ctx.stroke()

    // Pupil
    ctx.fillStyle = '#333'
    ctx.beginPath()
    ctx.arc(half * 0.42, -half * 0.15, half * 0.09, 0, Math.PI * 2)
    ctx.fill()
  }

  private drawSpeechBubble(sprite: Sprite) {
    const ctx = this.ctx
    const size = 40 * (sprite.size / 100)
    const screenX = STAGE_WIDTH / 2 + sprite.x
    const spriteTop = STAGE_HEIGHT / 2 - sprite.y - size / 2
    const bubbleGap = 8

    ctx.save()
    ctx.font = 'bold 13px sans-serif'
    const text = sprite.sayText
    const lines = text.split('\n')
    const lineHeight = 18
    let maxWidth = 0
    for (const line of lines) {
      const w = ctx.measureText(line).width
      if (w > maxWidth) maxWidth = w
    }
    const padding = 10
    const bw = maxWidth + padding * 2
    const bh = lines.length * lineHeight + padding * 2
    const bx = screenX - bw / 2
    const by = spriteTop - bh - bubbleGap

    ctx.fillStyle = sprite.sayType === 'think' ? '#e8e8e8' : 'white'
    ctx.strokeStyle = '#555'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.roundRect(bx, by, bw, bh, 8)
    ctx.fill()
    ctx.stroke()

    ctx.fillStyle = '#222'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], screenX, by + padding + i * lineHeight)
    }

    // Pointer
    ctx.beginPath()
    ctx.moveTo(screenX - 6, by + bh)
    ctx.lineTo(screenX, by + bh + 8)
    ctx.lineTo(screenX + 6, by + bh)
    ctx.fillStyle = sprite.sayType === 'think' ? '#e8e8e8' : 'white'
    ctx.fill()
    ctx.strokeStyle = '#555'
    ctx.lineWidth = 1.5
    ctx.stroke()

    // Think bubbles
    if (sprite.sayType === 'think') {
      ctx.fillStyle = '#e8e8e8'
      ctx.beginPath()
      ctx.arc(screenX - 3, by + bh + 12, 3, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(screenX - 6, by + bh + 18, 2, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
    }

    ctx.restore()
  }

  getStageDimensions() {
    return { width: STAGE_WIDTH, height: STAGE_HEIGHT }
  }

  private drawVisibleVariables() {
    if (this.visibleVars.size === 0) return

    const ctx = this.ctx
    let yOffset = 8

    ctx.save()
    ctx.font = 'bold 13px sans-serif'

    for (const [name, value] of this.visibleVars) {
      const text = `${name}: ${value}`
      const metrics = ctx.measureText(text)
      const padding = 6
      const bw = metrics.width + padding * 2
      const bh = 22

      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'
      ctx.beginPath()
      ctx.roundRect(6, yOffset, bw, bh, 4)
      ctx.fill()

      ctx.fillStyle = '#fff'
      ctx.textAlign = 'left'
      ctx.textBaseline = 'middle'
      ctx.fillText(text, 6 + padding, yOffset + bh / 2)

      yOffset += bh + 4
    }

    ctx.restore()
  }
}
