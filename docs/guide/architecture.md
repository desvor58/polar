# Архитектура

## Обзор

Polar построен по трёхслойной архитектуре:

```
Blockly Workspace
       │
       ▼
   Compiler (blocks → AST)
       │
       ▼
   Interpreter (AST → execution)
       │
       ▼
   Canvas Renderer (sprites + pen)
```

## Ключевые файлы

| Файл | Ответственность |
|------|-----------------|
| `blocks/index.ts` | Регистрация всех блоков и toolbox |
| `blocks/*.ts` | Определения блоков (motion, control, ...) |
| `runtime/compiler.ts` | Blockly → AST конвертер |
| `runtime/interpreter.ts` | Рекурсивный AST интерпретатор |
| `runtime/engine.ts` | Управление потоками, среда выполнения |
| `runtime/types.ts` | Типы AST узлов |
| `canvas/renderer.ts` | 2D рендеринг сцены |
| `canvas/sprite.ts` | Модель спрайта |

## Поток данных

### 1. Редактирование блоков

```
Пользователь перетаскивает блок
       │
       ▼
Blockly fires BLOCK_MOVE event
       │
       ▼
compileWorkspace(workspace) → HatBlock[]
       │
       ▼
engine.setHats(hats)
```

### 2. Запуск программы

```
Пользователь нажимает ▶
       │
       ▼
engine.start()
       │
       ├── env.clear() (сброс переменных, таймера, пера)
       ├── Сброс позиций спрайтов
       │
       ▼
Для каждого hat с trigger=flag_clicked:
       │
       ▼
engine.spawnThread(hat)
       │
       ▼
execute(hat.body, sprite, env) [async]
```

### 3. Цикл выполнения

```
execute(sequence[node1, node2, ...])
       │
       ├── execute(node1) → null или stop_signal
       ├── execute(node2) → null или stop_signal
       ├── ...
       │
       ▼
yieldFrame() (requestAnimationFrame)
       │
       ▼
renderer.draw() (отрисовка спрайтов, пера, речи)
```

## Многопоточность

- Каждый hat-блок создаёт отдельный поток (AbortController)
- Forever-циклы выполняются асинхронно с yield на каждый кадр
- `engine.stop()`.abort() все потоки
- Одновременно может работать несколько потоков (разные спрайты, разные события)

## Среда выполнения (RuntimeEnvironment)

```typescript
class RuntimeEnvironment {
  variables: Map<string, value>     // spriteId:name → value
  visibleVars: Set<string>          // переменные на сцене
  sprites: Sprite[]                 // ссылка на спрайты
  mouseX, mouseY: number            // позиция мыши
  keysPressed: Set<string>          // зажатые клавиши
  pen: PenState                     // состояние пера
  timerStart: number                // начало таймера
  onPrint: (text) => void           // callback для print
}
```
