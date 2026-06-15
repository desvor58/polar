import * as Blockly from 'blockly/core'

export function defineLooksBlocks() {
  Blockly.Blocks['looks_say'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('TEXT').appendField('say')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(260)
    }
  }

  Blockly.Blocks['looks_say_for'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('TEXT').appendField('say')
      this.appendValueInput('SECS').setCheck('Number').appendField('for').appendField(new Blockly.FieldNumber(2), '_').appendField('secs')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(260)
    }
  }

  Blockly.Blocks['looks_think'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('TEXT').appendField('think')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(260)
    }
  }

  Blockly.Blocks['looks_think_for'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('TEXT').appendField('think')
      this.appendValueInput('SECS').setCheck('Number').appendField('for').appendField(new Blockly.FieldNumber(2), '_').appendField('secs')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(260)
    }
  }

  Blockly.Blocks['looks_show'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('show')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(260)
    }
  }

  Blockly.Blocks['looks_hide'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('hide')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(260)
    }
  }

  Blockly.Blocks['looks_set_size'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('PERCENT').setCheck('Number').appendField('set size to').appendField(new Blockly.FieldNumber(100), '_').appendField('%')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(260)
    }
  }

  Blockly.Blocks['looks_switch_costume'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('COSTUME').appendField('switch costume to')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(260)
    }
  }
}
