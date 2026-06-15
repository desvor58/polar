import * as Blockly from 'blockly/core'

export function defineOperatorBlocks() {
  Blockly.Blocks['op_add'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('A').setCheck('Number')
      this.appendDummyInput().appendField('+')
      this.appendValueInput('B').setCheck('Number')
      this.setOutput(true, 'Number')
      this.setColour(160)
    }
  }

  Blockly.Blocks['op_subtract'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('A').setCheck('Number')
      this.appendDummyInput().appendField('-')
      this.appendValueInput('B').setCheck('Number')
      this.setOutput(true, 'Number')
      this.setColour(160)
    }
  }

  Blockly.Blocks['op_multiply'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('A').setCheck('Number')
      this.appendDummyInput().appendField('×')
      this.appendValueInput('B').setCheck('Number')
      this.setOutput(true, 'Number')
      this.setColour(160)
    }
  }

  Blockly.Blocks['op_divide'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('A').setCheck('Number')
      this.appendDummyInput().appendField('/')
      this.appendValueInput('B').setCheck('Number')
      this.setOutput(true, 'Number')
      this.setColour(160)
    }
  }

  Blockly.Blocks['op_random'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('FROM').setCheck('Number').appendField('pick random')
      this.appendValueInput('TO').setCheck('Number').appendField('to')
      this.setOutput(true, 'Number')
      this.setColour(160)
    }
  }

  Blockly.Blocks['op_lt'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('A').setCheck('Number')
      this.appendDummyInput().appendField('<')
      this.appendValueInput('B').setCheck('Number')
      this.setOutput(true, 'Boolean')
      this.setColour(160)
    }
  }

  Blockly.Blocks['op_equals'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('A')
      this.appendDummyInput().appendField('=')
      this.appendValueInput('B')
      this.setOutput(true, 'Boolean')
      this.setColour(160)
    }
  }

  Blockly.Blocks['op_gt'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('A').setCheck('Number')
      this.appendDummyInput().appendField('>')
      this.appendValueInput('B').setCheck('Number')
      this.setOutput(true, 'Boolean')
      this.setColour(160)
    }
  }

  Blockly.Blocks['op_and'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('A').setCheck('Boolean').appendField('and')
      this.appendValueInput('B').setCheck('Boolean')
      this.setOutput(true, 'Boolean')
      this.setColour(160)
    }
  }

  Blockly.Blocks['op_or'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('A').setCheck('Boolean').appendField('or')
      this.appendValueInput('B').setCheck('Boolean')
      this.setOutput(true, 'Boolean')
      this.setColour(160)
    }
  }

  Blockly.Blocks['op_not'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('OPERAND').setCheck('Boolean').appendField('not')
      this.setOutput(true, 'Boolean')
      this.setColour(160)
    }
  }
}
