import * as Blockly from 'blockly/core'

export function defineMotionBlocks() {
  Blockly.Blocks['motion_move'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('STEPS').setCheck('Number').appendField('move').appendField(new Blockly.FieldNumber(10), '_').appendField('steps')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(210)
    }
  }

  Blockly.Blocks['motion_turn_cw'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('DEGREES').setCheck('Number').appendField('turn ↻').appendField(new Blockly.FieldNumber(15), '_').appendField('degrees')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(210)
    }
  }

  Blockly.Blocks['motion_turn_ccw'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('DEGREES').setCheck('Number').appendField('turn ↺').appendField(new Blockly.FieldNumber(15), '_').appendField('degrees')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(210)
    }
  }

  Blockly.Blocks['motion_goto'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('X').setCheck('Number').appendField('go to x:')
      this.appendValueInput('Y').setCheck('Number').appendField('y:')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(210)
    }
  }

  Blockly.Blocks['motion_set_x'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('X').setCheck('Number').appendField('set x to')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(210)
    }
  }

  Blockly.Blocks['motion_set_y'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('Y').setCheck('Number').appendField('set y to')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(210)
    }
  }

  Blockly.Blocks['motion_glide'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('SECS').setCheck('Number').appendField('glide').appendField(new Blockly.FieldNumber(1), '_').appendField('secs to x:')
      this.appendValueInput('X').setCheck('Number')
      this.appendDummyInput().appendField('y:')
      this.appendValueInput('Y').setCheck('Number')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(210)
    }
  }

  Blockly.Blocks['motion_point_in_direction'] = {
    init(this: Blockly.Block) {
      this.appendValueInput('DIR').setCheck('Number').appendField('point in direction')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(210)
    }
  }

  Blockly.Blocks['motion_bounce_edge'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('if on edge, bounce')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setColour(210)
    }
  }

  Blockly.Blocks['motion_x'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('x position')
      this.setOutput(true, 'Number')
      this.setColour(210)
    }
  }

  Blockly.Blocks['motion_y'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('y position')
      this.setOutput(true, 'Number')
      this.setColour(210)
    }
  }

  Blockly.Blocks['motion_direction'] = {
    init(this: Blockly.Block) {
      this.appendDummyInput().appendField('direction')
      this.setOutput(true, 'Number')
      this.setColour(210)
    }
  }
}
