import * as Blockly from 'blockly/core'

const VARIABLES_COLOR = 330

export function defineVariableBlocks() {
  Blockly.Blocks['var_create'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('VALUE').setCheck('Number').appendField('создать переменную').appendField(new Blockly.FieldTextInput('счёт'), 'NAME').appendField('равной')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(VARIABLES_COLOR)
      this.setTooltip('Создать переменную и задать начальное значение')
    }
  }

  Blockly.Blocks['var_set'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('VALUE').appendField('установить').appendField(new Blockly.FieldTextInput('счёт'), 'NAME').appendField('равно')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(VARIABLES_COLOR)
    }
  }

  Blockly.Blocks['var_change'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('DELTA').setCheck('Number').appendField('изменить').appendField(new Blockly.FieldTextInput('счёт'), 'NAME').appendField('на')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(VARIABLES_COLOR)
    }
  }

  Blockly.Blocks['var_get'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField(new Blockly.FieldTextInput('счёт'), 'NAME')
      this.setOutput(true)
      this.setColour(VARIABLES_COLOR)
    }
  }

  Blockly.Blocks['var_show'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('показать переменную').appendField(new Blockly.FieldTextInput('счёт'), 'NAME')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(VARIABLES_COLOR)
      this.setTooltip('Показать значение переменной на сцене')
    }
  }

  Blockly.Blocks['var_hide'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('скрыть переменную').appendField(new Blockly.FieldTextInput('счёт'), 'NAME')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(VARIABLES_COLOR)
      this.setTooltip('Скрыть значение переменной со сцены')
    }
  }
}
