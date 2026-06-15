# Значения

Литералы и ввод данных.

## Блоки

| Блок | Тип | Описание |
|------|-----|----------|
| `(0)` | Репортёр | Число |
| `(0)` целое | Репортёр | Целое число |
| `(1)` положительное | Репортёр | Положительное число |
| `[]` текст | Репортёр | Текстовый литерал |
| `напечатать` | Стек | Вывод в консоль |

## Использование

Числовые и текстовые блоки вставляются в входы других блоков:

```
move (10) steps        ← число в вход STEPS
say (Привет!)          ← текст в вход TEXT
set [счёт] равно (0)   ← число в вход VALUE
```

## Вывод в консоль

Блок `напечатать` выводит текст в панель «Консоль»:

```typescript
// interpreter.ts
case 'print': {
  const text = String(evalExpr(node.text, sprite, env))
  if (env.onPrint) env.onPrint(text)
  break
}

// App.vue
engine.env.onPrint = (text: string) => {
  consoleLines.value.push(text)
}
```

## Файлы
- `src/blocks/literals.ts`
- `src/runtime/compiler.ts` (compileExpr cases)
