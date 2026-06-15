# Компилятор

Преобразование Blockly workspace → AST.

## Точка входа

```typescript
// runtime/compiler.ts
function compileWorkspace(workspace: Blockly.Workspace, defaultSpriteId: string): HatBlock[]
```

## Алгоритм

1. Получить все верхние блоки (`workspace.getTopBlocks(true)`)
2. Для каждого верхнего блока:
   - Если это hat-блок → создать `HatBlock` с триггером
   - Скомпилировать тело (connected blocks) в AST
3. Вернуть массив `HatBlock[]`

## Компиляция выражений

```typescript
function compileExpr(block: Blockly.Block | null): ASTNode
```

Обрабатывает:
- Литералы: `math_number` → `number_literal`, `text` → `string_literal`
- Переменные: `var_get` → `variable_ref`
- Операторы: `op_add` → `binary_op`
- Датчики: `sensing_mouse_x` → `mouse_x`
- Свойства спрайта: `motion_x` → `variable_ref('__x__')`

## Компиляция операторов

```typescript
function compileStmt(block: Blockly.Block): ASTNode
```

Обрабатывает все стековые блоки:
- Движение → move, turn, goto, ...
- Внешний вид → say, show, hide, ...
- Управление → repeat, forever, if, ...
- Перо → pen_down, pen_clear, ...
- Переменные → set_variable, change_variable, ...

## Обработка ошибок

Компилятор обёрнут в try-catch — неполные блоки (без подключённых входов) не падают, а возвращают дефолтные значения.

## Файл
`src/runtime/compiler.ts`
