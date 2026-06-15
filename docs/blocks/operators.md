# Операторы

Математика и логика.

## Блоки

### Арифметика

| Блок | Описание |
|------|----------|
| `[ ] + [ ]` | Сложение |
| `[ ] - [ ]` | Вычитание |
| `[ ] × [ ]` | Умножение |
| `[ ] / [ ]` | Деление |
| `случайное от (1) до (10)` | Случайное число |

### Сравнения

| Блок | Описание |
|------|----------|
| `[ ] < [ ]` | Меньше |
| `[ ] = [ ]` | Равно |
| `[ ] > [ ]` | Больше |

### Логика

| Блок | Описание |
|------|----------|
| `[ ] and [ ]` | И |
| `[ ] or [ ]` | Или |
| `not [ ]` | Отрицание |

## Реализация

```typescript
case 'binary_op': {
  const l = evalExpr(node.left, sprite, env)
  const r = evalExpr(node.right, sprite, env)
  const ln = Number(l), rn = Number(r)
  switch (node.op) {
    case '+': return ln + rn
    case '-': return ln - rn
    case '*': return ln * rn
    case '/': return rn !== 0 ? ln / rn : 0
    case '<': return ln < rn
    case '>': return ln > rn
    case '=': return l === r || ln === rn
    case 'and': return Boolean(l) && Boolean(r)
    case 'or': return Boolean(l) || Boolean(r)
  }
}
```

## Файлы
- `src/blocks/operators.ts`
- `src/runtime/interpreter.ts` (evalExpr)
