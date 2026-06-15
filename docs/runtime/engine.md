# Движок

Управление потоками и средой выполнения.

## Классы

### Engine

Главный класс — управляет жизненным циклом программы.

```typescript
class Engine {
  sprites: Sprite[]
  hats: HatBlock[]
  env: RuntimeEnvironment

  start()     // Запуск всех flag_clicked хатов
  stop()      // Остановка всех потоков
  handleKeyPress(key: string)
  handleKeyRelease(key: string)
  handleMouseMove(x: number, y: number)
  handleSpriteClick(spriteId: string)
}
```

### RuntimeEnvironment

Среда выполнения — хранит переменные, состояние пера, ввод.

```typescript
class RuntimeEnvironment {
  variables: Map<string, value>
  visibleVars: Set<string>
  sprites: Sprite[]
  mouseX, mouseY: number
  keysPressed: Set<string>
  pen: PenState
  timerStart: number
  onPrint: (text) => void
}
```

## Многопоточность

Каждый hat-блок создаёт отдельный поток:

```typescript
interface ScriptThread {
  spriteId: string
  abortController: AbortController
}
```

Потоки работают параллельно через async/await. `AbortController` позволяет остановить любой поток.

## Жизненный цикл

```
engine.start()
  ├── env.clear()
  ├── Сброс позиций спрайтов
  ├── Для каждого flag_clicked hat:
  │   └── spawnThread(hat)
  │       └── execute(hat.body, sprite, env, signal)
  │
engine.stop()
  ├── Для каждого thread:
  │   └── abortController.abort()
  ├── threads = []
  ├── Сброс sayText у спрайтов
  └── onStateChange()
```

## Файлы
- `src/runtime/engine.ts`
- `src/runtime/types.ts` (HatBlock, HatTrigger)
