import * as Blockly from 'blockly/core'

const SENSING_COLOR = 195

export function defineSensingBlocks() {
  Blockly.Blocks['sensing_key_pressed'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput()
        .appendField('клавиша')
        .appendField(new Blockly.FieldDropdown([
          ['пробел', ' '],
          ['стрелка вверх', 'ArrowUp'],
          ['стрелка вниз', 'ArrowDown'],
          ['стрелка влево', 'ArrowLeft'],
          ['стрелка вправо', 'ArrowRight'],
          ['a', 'a'], ['b', 'b'], ['c', 'c'], ['d', 'd'], ['e', 'e'],
          ['f', 'f'], ['g', 'g'], ['h', 'h'], ['i', 'i'], ['j', 'j'],
          ['enter', 'Enter']
        ]), 'KEY')
        .appendField('нажата?')
      this.setOutput(true, 'Boolean')
      this.setColour(SENSING_COLOR)
    }
  }

  Blockly.Blocks['sensing_mouse_x'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('мышь x')
      this.setOutput(true, 'Number')
      this.setColour(SENSING_COLOR)
    }
  }

  Blockly.Blocks['sensing_mouse_y'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('мышь y')
      this.setOutput(true, 'Number')
      this.setColour(SENSING_COLOR)
    }
  }

  Blockly.Blocks['sensing_touching_edge'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('касается края?')
      this.setOutput(true, 'Boolean')
      this.setColour(SENSING_COLOR)
    }
  }

  Blockly.Blocks['sensing_touching_sprite'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('SPRITE').appendField('касается спрайта')
      this.setOutput(true, 'Boolean')
      this.setColour(SENSING_COLOR)
    }
  }

  Blockly.Blocks['sensing_distance_to'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('SPRITE').appendField('расстояние до')
      this.setOutput(true, 'Number')
      this.setColour(SENSING_COLOR)
    }
  }

  Blockly.Blocks['sensing_timer'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('таймер')
      this.setOutput(true, 'Number')
      this.setColour(SENSING_COLOR)
    }
  }

  Blockly.Blocks['sensing_reset_timer'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('сбросить таймер')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(SENSING_COLOR)
    }
  }

  Blockly.Blocks['sensing_of'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('SPRITE').appendField('свойство')
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
        ['x позиция', 'x'],
        ['y позиция', 'y'],
        ['направление', 'direction'],
        ['размер', 'size'],
        ['видимый', 'visible']
      ]), 'PROP')
      this.appendDummyInput().appendField('спрайта')
      this.setOutput(true)
      this.setColour(SENSING_COLOR)
    }
  }
}
