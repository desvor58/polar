<template>
  <div ref="blocklyDiv" class="blockly-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as Blockly from 'blockly/core'
import 'blockly/blocks'
import { registerAllBlocks, TOOLBOX } from '../blocks/index'
import { compileWorkspace } from '../runtime/compiler'
import { DEMO_PROJECT } from '../demo'

const props = defineProps<{
  spriteId?: string
}>()

const emit = defineEmits<{
  hatsChanged: [hats: ReturnType<typeof compileWorkspace>]
  requestRun: []
  requestStop: []
}>()

const blocklyDiv = ref<HTMLDivElement>()
let workspace: Blockly.WorkspaceSvg | null = null

onMounted(() => {
  registerAllBlocks()

  workspace = Blockly.inject(blocklyDiv.value!, {
    toolbox: TOOLBOX,
    grid: {
      spacing: 20,
      length: 3,
      colour: '#ccc',
      snap: true
    },
    zoom: {
      controls: true,
      wheel: true,
      startScale: 0.9,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2
    },
    trashcan: true,
    move: {
      scrollbars: true,
      drag: true,
      wheel: true
    },
    theme: Blockly.Theme.defineTheme('polar', {
      name: 'polar',
      base: Blockly.Themes.Zelos,
      blockStyles: {
        motion_blocks: { colourPrimary: '#4C97FF' },
        looks_blocks: { colourPrimary: '#9966FF' },
        control_blocks: { colourPrimary: '#FFAB19' },
        event_blocks: { colourPrimary: '#FFD500' },
        operator_blocks: { colourPrimary: '#40BF4A' },
        variable_blocks: { colourPrimary: '#FF8C1A' }
      },
      categoryStyles: {},
      componentStyles: {
        workspaceBackgroundColour: '#181825',
        toolboxBackgroundColour: '#1e1e2e',
        flyoutBackgroundColour: '#313244',
        scrollbarColour: '#45475a',
        insertionMarkerColour: '#89b4fa'
      },
      fontStyle: { family: 'sans-serif', weight: 'bold', size: 11 }
    }) as any
  })

  workspace.addChangeListener((e) => {
    if (e.type === Blockly.Events.BLOCK_CHANGE ||
        e.type === Blockly.Events.BLOCK_CREATE ||
        e.type === Blockly.Events.BLOCK_DELETE ||
        e.type === Blockly.Events.BLOCK_MOVE) {
      if (workspace) {
        try {
          emit('hatsChanged', compileWorkspace(workspace, props.spriteId))
        } catch (err) {
          console.error('Compile error:', err)
        }
      }
    }
  })

  emit('hatsChanged', compileWorkspace(workspace, props.spriteId))

  // Load demo project
  try {
    Blockly.serialization.workspaces.load(DEMO_PROJECT, workspace)
    emit('hatsChanged', compileWorkspace(workspace, props.spriteId))
    console.log('Demo loaded, blocks:', workspace.getAllBlocks().length)
  } catch (e) {
    console.error('Failed to load demo:', e)
  }
})

onUnmounted(() => {
  workspace?.dispose()
})

function getWorkspace() {
  return workspace
}

function loadWorkspace(json: any) {
  if (workspace) {
    Blockly.serialization.workspaces.load(json, workspace)
  }
}

function saveWorkspace(): any {
  if (workspace) {
    return Blockly.serialization.workspaces.save(workspace)
  }
  return null
}

defineExpose({ getWorkspace, loadWorkspace, saveWorkspace })
</script>

<style scoped>
.blockly-container {
  width: 100%;
  height: 100%;
}
</style>
