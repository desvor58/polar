<template>
  <div class="toolbar">
    <button
      class="btn flag-btn"
      :class="{ active: running }"
      @click="$emit('toggleRun')"
      title="Запустить"
    >
      ▶
    </button>
    <button
      class="btn stop-btn"
      @click="$emit('stop')"
      title="Остановить"
    >
      ■
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  running: boolean
}>()

defineEmits<{
  toggleRun: []
  stop: []
}>()
</script>

<style scoped>
.toolbar {
  display: flex;
  gap: 8px;
  padding: 8px;
  background: #181825;
  border-radius: 8px;
  align-items: center;
}

.btn {
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s, box-shadow 0.1s;
}

.btn:hover {
  transform: scale(1.05);
}

.btn:active {
  transform: scale(0.95);
}

.flag-btn {
  background: #4caf50;
  color: white;
}

.flag-btn.active {
  background: #388e3c;
  box-shadow: 0 0 12px #4caf50aa;
}

.stop-btn {
  background: #e74c3c;
  color: white;
}
</style>
