<template>
  <div class="stage-wrapper">
    <canvas
      ref="canvasRef"
      class="stage-canvas"
      @click="handleClick"
      @mousemove="handleMouseMove"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Renderer } from '../canvas/renderer'
import type { Sprite } from '../canvas/sprite'
import type { PenState } from '../runtime/engine'

const props = defineProps<{
  sprites: Sprite[]
}>()

const emit = defineEmits<{
  spriteClicked: [spriteId: string]
  mouseMoved: [x: number, y: number]
}>()

const canvasRef = ref<HTMLCanvasElement>()
let renderer: Renderer | null = null

onMounted(() => {
  if (canvasRef.value) {
    renderer = new Renderer(canvasRef.value)
    renderer.setSprites(props.sprites)
    renderer.start()
  }
})

onUnmounted(() => {
  renderer?.stop()
})

function handleClick(e: MouseEvent) {
  if (!canvasRef.value || !renderer) return
  const rect = canvasRef.value.getBoundingClientRect()
  const scaleX = 480 / rect.width
  const scaleY = 360 / rect.height
  const mx = (e.clientX - rect.left) * scaleX - 240
  const my = 180 - (e.clientY - rect.top) * scaleY

  for (const sprite of [...props.sprites].reverse()) {
    if (!sprite.visible) continue
    const dx = mx - sprite.x
    const dy = my - sprite.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 30 * (sprite.size / 100)) {
      emit('spriteClicked', sprite.id)
      return
    }
  }
}

function handleMouseMove(e: MouseEvent) {
  if (!canvasRef.value) return
  const rect = canvasRef.value.getBoundingClientRect()
  const scaleX = 480 / rect.width
  const scaleY = 360 / rect.height
  const mx = (e.clientX - rect.left) * scaleX - 240
  const my = 180 - (e.clientY - rect.top) * scaleY
  emit('mouseMoved', mx, my)
}

defineExpose({
  updateSprites(sprites: Sprite[]) {
    renderer?.setSprites(sprites)
  },
  updateVisibleVariables(vars: Map<string, number | string | boolean>) {
    renderer?.setVisibleVariables(vars)
  },
  updatePen(pen: PenState) {
    renderer?.setPen(pen)
  }
})
</script>

<style scoped>
.stage-wrapper {
  background: #181825;
  border-radius: 8px;
  overflow: hidden;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stage-canvas {
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  cursor: pointer;
}
</style>
