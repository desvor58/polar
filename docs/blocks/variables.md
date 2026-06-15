# Переменные

Хранение и управление данными.

## Блоки

| Блок | Тип | Описание |
|------|-----|----------|
| `создать переменную [счёт] равной (0)` | Стек | Инициализация |
| `установить [счёт] равно` | Стек | Присваивание |
| `изменить [счёт] на (1)` | Стек | Инкремент/декремент |
| `[счёт]` | Репортёр | Чтение значения |
| `показать переменную [счёт]` | Стек | Отображение на сцене |
| `скрыть переменную [счёт]` | Стек | Скрытие со сцены |

## Хранение

Переменные хранятся в `RuntimeEnvironment` по ключу `spriteId:name`:

```typescript
class RuntimeEnvironment {
  private variables = new Map<string, number | string | boolean>()
  private visibleVars = new Set<string>()

  getVariable(spriteId: string, name: string) {
    return this.variables.get(`${spriteId}:${name}`) ?? 0
  }

  setVariable(spriteId: string, name: string, value: number | string | boolean) {
    this.variables.set(`${spriteId}:${name}`, value)
  }
}
```

## Отображение на сцене

Переменные с флагом `visible` рисуются в левом верхнем углу:

```typescript
private drawVisibleVariables() {
  for (const [name, value] of this.visibleVars) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'
    ctx.roundRect(6, yOffset, bw, bh, 4)
    ctx.fillText(`${name}: ${value}`, ...)
  }
}
```

## Файлы
- `src/blocks/variables.ts`
- `src/runtime/engine.ts` (RuntimeEnvironment)
- `src/canvas/renderer.ts` (drawVisibleVariables)
