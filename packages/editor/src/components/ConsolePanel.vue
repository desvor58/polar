<template>
  <div class="console-panel" ref="panelRef">
    <div class="console-header">
      <span>Консоль</span>
      <button class="clear-btn" @click="$emit('clear')" title="Очистить">×  </button>
    </div>
    <div class="console-output" ref="outputRef">
      <div v-if="lines.length === 0" class="placeholder">Вывод блоков «напечатать»</div>
      <div v-for="(line, i) in lines" :key="i" class="console-line">
        <span class="line-num">{{ i + 1 }}</span>
        <span class="line-text">{{ line }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const props = defineProps<{
  lines: string[]
}>()

const outputRef = ref<HTMLDivElement>()

watch(() => props.lines.length, async () => {
  await nextTick()
  if (outputRef.value) {
    outputRef.value.scrollTop = outputRef.value.scrollHeight
  }
})
</script>

<style scoped>
.console-panel {
  background: #181825;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 140px;
}

.console-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 600;
  color: #a6adc8;
  border-bottom: 1px solid #313244;
}

.clear-btn {
  background: none;
  border: none;
  color: #6c7086;
  cursor: pointer;
  font-size: 14px;
}

.clear-btn:hover {
  color: #f38ba8;
}

.console-output {
  flex: 1;
  overflow-y: auto;
  padding: 6px 10px;
  font-family: 'SF Mono', 'Menlo', 'Consolas', monospace;
  font-size: 12px;
}

.placeholder {
  color: #45475a;
  font-style: italic;
}

.console-line {
  display: flex;
  gap: 8px;
  line-height: 1.5;
}

.line-num {
  color: #45475a;
  min-width: 20px;
  text-align: right;
  user-select: none;
}

.line-text {
  color: #a6e3a1;
  word-break: break-word;
}
</style>
