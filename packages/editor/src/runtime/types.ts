export type ASTNode =
  | { type: 'sequence'; body: ASTNode[] }
  | { type: 'move'; steps: ASTNode }
  | { type: 'turn'; direction: 'cw' | 'ccw'; degrees: ASTNode }
  | { type: 'goto'; x: ASTNode; y: ASTNode }
  | { type: 'goto_sprite'; sprite: string }
  | { type: 'set_x'; x: ASTNode }
  | { type: 'set_y'; y: ASTNode }
  | { type: 'glide'; secs: ASTNode; x: ASTNode; y: ASTNode }
  | { type: 'point_in_direction'; dir: ASTNode }
  | { type: 'bounce_on_edge' }
  | { type: 'say'; text: ASTNode; duration?: ASTNode }
  | { type: 'think'; text: ASTNode; duration?: ASTNode }
  | { type: 'show' }
  | { type: 'hide' }
  | { type: 'set_size'; percent: ASTNode }
  | { type: 'switch_costume'; costume: ASTNode }
  | { type: 'wait'; seconds: ASTNode }
  | { type: 'wait_until'; condition: ASTNode }
  | { type: 'repeat'; count: ASTNode; body: ASTNode }
  | { type: 'repeat_until'; condition: ASTNode; body: ASTNode }
  | { type: 'forever'; body: ASTNode }
  | { type: 'if'; condition: ASTNode; body: ASTNode; elseBody?: ASTNode }
  | { type: 'set_variable'; name: string; value: ASTNode }
  | { type: 'change_variable'; name: string; delta: ASTNode }
  | { type: 'variable_ref'; name: string }
  | { type: 'number_literal'; value: number }
  | { type: 'string_literal'; value: string }
  | { type: 'binary_op'; op: '+' | '-' | '*' | '/' | '<' | '>' | '=' | 'and' | 'or'; left: ASTNode; right: ASTNode }
  | { type: 'not'; operand: ASTNode }
  | { type: 'random'; from: ASTNode; to: ASTNode }
  | { type: 'stop'; target: 'all' | 'this' }
  | { type: 'print'; text: ASTNode }
  | { type: 'show_variable'; name: string }
  | { type: 'hide_variable'; name: string }
  // Sensing
  | { type: 'key_pressed'; key: string }
  | { type: 'mouse_x' }
  | { type: 'mouse_y' }
  | { type: 'touching_edge' }
  | { type: 'touching_sprite'; sprite: string }
  | { type: 'distance_to'; sprite: string }
  | { type: 'timer' }
  | { type: 'reset_timer' }
  | { type: 'sprite_property'; sprite: string; property: string }
  // Pen
  | { type: 'pen_down' }
  | { type: 'pen_up' }
  | { type: 'pen_clear' }
  | { type: 'pen_set_color'; color: string }
  | { type: 'pen_set_size'; size: ASTNode }
  | { type: 'pen_stamp' }

export interface HatBlock {
  spriteId: string
  trigger: HatTrigger
  body: ASTNode
}

export type HatTrigger =
  | { type: 'flag_clicked' }
  | { type: 'key_pressed'; key: string }
  | { type: 'sprite_clicked' }
