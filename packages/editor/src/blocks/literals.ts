import * as Blockly from 'blockly/core'

export function defineLiteralBlocks() {
  Blockly.Blocks['math_number'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField(new Blockly.FieldNumber(0), 'NUM')
      this.setOutput(true, 'Number')
      this.setColour(230)
      this.setTooltip('Число')
    }
  }

  Blockly.Blocks['math_whole_number'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField(new Blockly.FieldNumber(0, 0, 99999, 1), 'NUM')
      this.setOutput(true, 'Number')
      this.setColour(230)
      this.setTooltip('Целое число')
    }
  }

  Blockly.Blocks['math_positive_number'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField(new Blockly.FieldNumber(1, 0, 99999, 1), 'NUM')
      this.setOutput(true, 'Number')
      this.setColour(230)
      this.setTooltip('Положительное число')
    }
  }

  Blockly.Blocks['text'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField(new Blockly.FieldTextInput(''), 'TEXT')
      this.setOutput(true, 'String')
      this.setColour(440)
      this.setTooltip('Текст')
    }
  }

  Blockly.Blocks['text_print'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('TEXT').appendField('print')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(440)
    }
  }

  Blockly.Blocks['math_random'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('FROM').setCheck('Number').appendField('случайное от')
      this.appendValueInput('TO').setCheck('Number').appendField('до')
      this.setOutput(true, 'Number')
      this.setColour(230)
      this.setTooltip('Случайное число')
    }
  }
}
