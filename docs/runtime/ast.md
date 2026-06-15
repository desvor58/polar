# AST (Abstract Syntax Tree)

## Определение

```typescript
// runtime/types.ts
type ASTNode =
  | { type: 'sequence'; body: ASTNode[] }
  | { type: 'move'; steps: ASTNode }
  | { type: 'turn'; direction: 'cw' | 'ccw'; degrees: ASTNode }
  | { type: 'goto'; x: ASTNode; y: ASTNode }
  | { type: 'say'; text: ASTNode; duration?: ASTNode }
  | { type: 'wait'; seconds: ASTNode }
  | { type: 'repeat'; count: ASTNode; body: ASTNode }
  | { type: 'forever'; body: ASTNode }
  | { type: 'if'; condition: ASTNode; body: ASTNode; elseBody?: ASTNode }
  | { type: 'set_variable'; name: string; value: ASTNode }
  | { type: 'change_variable'; name: string; delta: ASTNode }
  | { type: 'variable_ref'; name: string }
  | { type: 'number_literal'; value: number }
  | { type: 'string_literal'; value: string }
  | { type: 'binary_op'; op: string; left: ASTNode; right: ASTNode }
  | { type: 'pen_down' }
  | { type: 'pen_clear' }
  | { type: 'key_pressed'; key: string }
  | { type: 'mouse_x' }
  | { type: 'touching_edge' }
  | { type: 'print'; text: ASTNode }
  | { type: 'stop'; target: 'all' | 'this' }
  // ... и другие
```

## HatBlock

```typescript
interface HatBlock {
  spriteId: string          // ID спрайта-владельца
  trigger: HatTrigger       // триггер запуска
  body: ASTNode             // тело скрипта
}

type HatTrigger =
  | { type: 'flag_clicked' }
  | { type: 'key_pressed'; key: string }
  | { type: 'sprite_clicked' }
```

## Пример AST

Для программы:
```
when ▶ clicked
move (10) steps
turn ↻ (15) degrees
```

AST:
```json
{
  "type": "sequence",
  "body": [
    { "type": "move", "steps": { "type": "number_literal", "value": 10 } },
    { "type": "turn", "direction": "cw", "degrees": { "type": "number_literal", "value": 15 } }
  ]
}
```

## Файл
`src/runtime/types.ts`
