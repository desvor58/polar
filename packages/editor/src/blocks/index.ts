import { defineMotionBlocks } from './motion'
import { defineLooksBlocks } from './looks'
import { defineControlBlocks } from './control'
import { defineEventBlocks } from './events'
import { defineOperatorBlocks } from './operators'
import { defineVariableBlocks } from './variables'
import { defineLiteralBlocks } from './literals'
import { defineSensingBlocks } from './sensing'
import { definePenBlocks } from './pen'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TOOLBOX: any = {
  contents: [
    {
      kind: 'category',
      name: 'События',
      colour: '45',
      contents: [
        { kind: 'block', type: 'event_flag_clicked' },
        { kind: 'block', type: 'event_key_pressed' },
        { kind: 'block', type: 'event_sprite_clicked' }
      ]
    },
    {
      kind: 'category',
      name: 'Движение',
      colour: '210',
      contents: [
        { kind: 'block', type: 'motion_move' },
        { kind: 'block', type: 'motion_turn_cw' },
        { kind: 'block', type: 'motion_turn_ccw' },
        { kind: 'block', type: 'motion_goto' },
        { kind: 'block', type: 'motion_set_x' },
        { kind: 'block', type: 'motion_set_y' },
        { kind: 'block', type: 'motion_glide' },
        { kind: 'block', type: 'motion_point_in_direction' },
        { kind: 'block', type: 'motion_bounce_edge' },
        { kind: 'block', type: 'motion_x' },
        { kind: 'block', type: 'motion_y' },
        { kind: 'block', type: 'motion_direction' }
      ]
    },
    {
      kind: 'category',
      name: 'Внешний вид',
      colour: '260',
      contents: [
        { kind: 'block', type: 'looks_say' },
        { kind: 'block', type: 'looks_say_for' },
        { kind: 'block', type: 'looks_think' },
        { kind: 'block', type: 'looks_think_for' },
        { kind: 'block', type: 'looks_show' },
        { kind: 'block', type: 'looks_hide' },
        { kind: 'block', type: 'looks_set_size' },
        { kind: 'block', type: 'looks_switch_costume' }
      ]
    },
    {
      kind: 'category',
      name: 'Управление',
      colour: '30',
      contents: [
        { kind: 'block', type: 'control_wait' },
        { kind: 'block', type: 'control_wait_until' },
        { kind: 'block', type: 'control_repeat' },
        { kind: 'block', type: 'control_repeat_until' },
        { kind: 'block', type: 'control_forever' },
        { kind: 'block', type: 'control_for_each' },
        { kind: 'block', type: 'control_if' },
        { kind: 'block', type: 'control_if_else' },
        { kind: 'block', type: 'control_stop' }
      ]
    },
    {
      kind: 'category',
      name: 'Датчики',
      colour: '195',
      contents: [
        { kind: 'block', type: 'sensing_key_pressed' },
        { kind: 'block', type: 'sensing_mouse_x' },
        { kind: 'block', type: 'sensing_mouse_y' },
        { kind: 'block', type: 'sensing_touching_edge' },
        { kind: 'block', type: 'sensing_touching_sprite' },
        { kind: 'block', type: 'sensing_distance_to' },
        { kind: 'block', type: 'sensing_timer' },
        { kind: 'block', type: 'sensing_reset_timer' },
        { kind: 'block', type: 'sensing_of' }
      ]
    },
    {
      kind: 'category',
      name: 'Операторы',
      colour: '160',
      contents: [
        { kind: 'block', type: 'op_add' },
        { kind: 'block', type: 'op_subtract' },
        { kind: 'block', type: 'op_multiply' },
        { kind: 'block', type: 'op_divide' },
        { kind: 'block', type: 'op_random' },
        { kind: 'block', type: 'op_lt' },
        { kind: 'block', type: 'op_equals' },
        { kind: 'block', type: 'op_gt' },
        { kind: 'block', type: 'op_and' },
        { kind: 'block', type: 'op_or' },
        { kind: 'block', type: 'op_not' }
      ]
    },
    {
      kind: 'category',
      name: 'Переменные',
      colour: '330',
      contents: [
        { kind: 'block', type: 'var_create' },
        { kind: 'block', type: 'var_set' },
        { kind: 'block', type: 'var_change' },
        { kind: 'block', type: 'var_get' },
        { kind: 'block', type: 'var_show' },
        { kind: 'block', type: 'var_hide' }
      ]
    },
    {
      kind: 'category',
      name: 'Перо',
      colour: '160',
      contents: [
        { kind: 'block', type: 'pen_down' },
        { kind: 'block', type: 'pen_up' },
        { kind: 'block', type: 'pen_clear' },
        { kind: 'block', type: 'pen_set_color' },
        { kind: 'block', type: 'pen_set_size' },
        { kind: 'block', type: 'pen_stamp' }
      ]
    },
    {
      kind: 'category',
      name: 'Значения',
      colour: '230',
      contents: [
        { kind: 'block', type: 'math_number' },
        { kind: 'block', type: 'math_whole_number' },
        { kind: 'block', type: 'math_positive_number' },
        { kind: 'block', type: 'text' },
        { kind: 'block', type: 'text_print' }
      ]
    }
  ]
}

export function registerAllBlocks() {
  defineMotionBlocks()
  defineLooksBlocks()
  defineControlBlocks()
  defineEventBlocks()
  defineOperatorBlocks()
  defineVariableBlocks()
  defineLiteralBlocks()
  defineSensingBlocks()
  definePenBlocks()
}
