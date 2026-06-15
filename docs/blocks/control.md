# Управление

Циклы, условия и поток выполнения.

## Блоки

| Блок | Тип | Описание |
|------|-----|----------|
| `ждать (1) сек` | Стек | Пауза |
| `ждать пока` | Стек | Ждать пока условие истинно |
| `повторить (10) раз` | C-shape | Цикл с счётчиком |
| `повторять пока не` | C-shape | Цикл пока условие ложно |
| `навсегда` | C-shape | Бесконечный цикл |
| `для [i] от (1) до (10)` | C-shape | Цикл по переменной |
| `если <> то` | C-shape | Условие |
| `если <> то / иначе` | C-shape | Условие с ветвлением |
| `остановить [все]` | Стек | Прерывание |

## Важно: cooperative yielding

Все циклы используют `yieldFrame()` — асинхронный yield на каждый кадр:

```typescript
case 'forever':
  while (!abortSignal?.aborted) {
    const result = await execute(node.body, sprite, env, abortSignal)
    if (result) return result
    await yieldFrame()  // ← отдаём управление рендереру
  }
  break
```

Без этого forever-цикл заблокировал бы UI.

## Файлы
- `src/blocks/control.ts`
- `src/runtime/interpreter.ts`
