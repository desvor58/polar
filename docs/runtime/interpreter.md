# Интерпретатор

Рекурсивный async-исполнитель AST.

## Точка входа

```typescript
// runtime/interpreter.ts
async function execute(
  node: ASTNode,
  sprite: Sprite,
  env: RuntimeEnvironment,
  abortSignal?: AbortSignal
): Promise<StopSignal | null>
```

## Принцип работы

Интерпретатор рекурсивно обходит AST. Каждый узел выполняется и может:

1. **Изменить состояние** (sprite.x += 10)
2. **Вызвать yield** (await yieldFrame())
3. **Вернуть stop-signal** (return { type: 'stop', target: 'all' })
4. **Прерваться** (if abortSignal.aborted)

## Вычисление выражений

```typescript
function evalExpr(node: ASTNode, sprite: Sprite, env: RuntimeEnvironment): number | string | boolean
```

Чистая функция — не меняет состояние, только возвращает значение.

## Выполнение операторов

```typescript
async function execute(node: ASTNode, sprite, env, abortSignal): Promise<StopSignal | null>
```

Побочный эффект — меняет sprite, env, pen.

## Cooperative Yielding

Все циклы используют `yieldFrame()`:

```typescript
function yieldFrame(): Promise<void> {
  return new Promise(resolve => requestAnimationFrame(() => resolve()))
}
```

Это отдаёт управление браузеру для:
- Отрисовки Canvas
- Обработки событий ввода
- Предотвращения зависания UI

## Обработка остановки

```typescript
if (abortSignal?.aborted) return { type: 'stop', target: 'all' }
```

Каждая итерация цикла и каждый await проверяют abort signal.

## sleep с прерыванием

```typescript
function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise(resolve => {
    const timer = setTimeout(resolve, ms)
    signal?.addEventListener('abort', () => {
      clearTimeout(timer)
      resolve()
    }, { once: true })
  })
}
```

## Файл
`src/runtime/interpreter.ts`
