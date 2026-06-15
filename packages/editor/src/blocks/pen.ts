import * as Blockly from 'blockly/core'

const PEN_COLOR = 160

export function definePenBlocks() {
  Blockly.Blocks['pen_down'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('опустить перо')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(PEN_COLOR)
    }
  }

  Blockly.Blocks['pen_up'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('поднять перо')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(PEN_COLOR)
    }
  }

  Blockly.Blocks['pen_clear'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('очистить экран')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(PEN_COLOR)
    }
  }

  Blockly.Blocks['pen_set_color'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput()
        .appendField('цвет пера')
        .appendField(new Blockly.FieldDropdown([
          ['красный', '#ff0000'],
          ['оранжевый', '#ff8c00'],
          ['жёлтый', '#ffd700'],
          ['зелёный', '#00cc00'],
          ['голубой', '#00cccc'],
          ['синий', '#0066ff'],
          ['фиолетовый', '#9933ff'],
          ['чёрный', '#000000'],
          ['белый', '#ffffff']
        ]), 'COLOR')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(PEN_COLOR)
    }
  }

  Blockly.Blocks['pen_set_size'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('SIZE').setCheck('Number')
        .appendField('толщина пера')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(PEN_COLOR)
    }
  }

  Blockly.Blocks['pen_stamp'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('штамп')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(PEN_COLOR)
    }
  }
}
