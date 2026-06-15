# Движение

Управление позицией и ориентацией спрайта.

## Блоки

| Блок | Тип | Описание |
|------|-----|----------|
| `move (10) steps` | Стек | Двигается вперёд на N шагов |
| `turn ↻ (15) degrees` | Стек | Поворот по часовой |
| `turn ↺ (15) degrees` | Стек | Поворот против часовой |
| `go to x: (0) y: (0)` | Стек | Телепорт в точку |
| `set x to (0)` | Стек | Установить X |
| `set y to (0)` | Стек | Установить Y |
| `glide (1) secs to x: (0) y: (0)` | Стек | Плавное перемещение |
| `point in direction (90)` | Стек | Повернуть в направлении |
| `if on edge, bounce` | Стек | Отскок от границы |
| `x position` | Репортёр | Текущий X |
| `y position` | Репортёр | Текущий Y |
| `direction` | Репортёр | Текущее направление |

## Координатная система

```
        y
        ↑
  -180  │  +180
        │
────────┼────────→ x
 -240   │  +240
        │
        0
```

Центр сцены: (0, 0)
Границы: x ∈ [-240, 240], y ∈ [-180, 180]

## Реализация move

```typescript
case 'move': {
  const steps = num(node.steps, sprite, env)
  const rad = (sprite.direction - 90) * Math.PI / 180
  const prevX = sprite.x
  const prevY = sprite.y
  sprite.x += steps * Math.cos(rad)
  sprite.y += steps * Math.sin(rad)
  if (env.pen.isDown) {
    env.pen.lines.push({ x1: prevX, y1: prevY, x2: sprite.x, y2: sprite.y, ... })
  }
  break
}
```

## Файлы
- `src/blocks/motion.ts`
- `src/runtime/interpreter.ts` (execute cases)
