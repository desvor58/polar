<template>
  <div class="sprite-panel">
    <div class="panel-header">
      <span>Спрайты</span>
      <button class="add-btn" @click="$emit('addSprite')" title="Добавить спрайт">+</button>
    </div>
    <div class="sprite-list">
      <div
        v-for="sprite in sprites"
        :key="sprite.id"
        class="sprite-item"
        :class="{ selected: sprite.id === selectedId }"
        @click="$emit('selectSprite', sprite.id)"
      >
        <div class="sprite-preview">
          <div class="sprite-dot"></div>
        </div>
        <div class="sprite-info">
          <input
            class="sprite-name"
            :value="sprite.name"
            @change="$emit('renameSprite', sprite.id, ($event.target as HTMLInputElement).value)"
            @click.stop
          />
          <span class="sprite-coords">
            x: {{ Math.round(sprite.x) }} y: {{ Math.round(sprite.y) }}
          </span>
        </div>
        <button
          v-if="sprites.length > 1"
          class="delete-btn"
          @click.stop="$emit('deleteSprite', sprite.id)"
          title="Удалить"
        >
          ×
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Sprite } from '../canvas/sprite'

defineProps<{
  sprites: Sprite[]
  selectedId: string
}>()

defineEmits<{
  addSprite: []
  deleteSprite: [id: string]
  selectSprite: [id: string]
  renameSprite: [id: string, name: string]
}>()
</script>

<style scoped>
.sprite-panel {
  background: #181825;
  border-radius: 8px;
  padding: 8px;
  max-height: 120px;
  overflow-y: auto;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #a6adc8;
}

.add-btn {
  background: #89b4fa;
  color: #1e1e2e;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sprite-list {
  display: flex;
  gap: 6px;
}

.sprite-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
  border: 2px solid transparent;
  background: #313244;
  min-width: 120px;
}

.sprite-item.selected {
  border-color: #89b4fa;
}

.sprite-preview {
  width: 28px;
  height: 28px;
  background: #45475a;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sprite-dot {
  width: 12px;
  height: 12px;
  background: #ff6b6b;
  border-radius: 2px;
  clip-path: polygon(100% 50%, 30% 0%, 0% 50%, 30% 100%);
}

.sprite-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.sprite-name {
  background: none;
  border: none;
  color: #cdd6f4;
  font-size: 12px;
  font-weight: 600;
  padding: 0;
  width: 70px;
}

.sprite-name:focus {
  outline: 1px solid #89b4fa;
  border-radius: 2px;
}

.sprite-coords {
  font-size: 10px;
  color: #6c7086;
}

.delete-btn {
  background: none;
  border: none;
  color: #6c7086;
  cursor: pointer;
  font-size: 16px;
  padding: 0 4px;
}

.delete-btn:hover {
  color: #f38ba8;
}
</style>
