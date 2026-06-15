# Перо

Рисование линий и штампов на сцене.

## Блоки

| Блок | Тип | Описание |
|------|-----|----------|
| `опустить перо` | Стек | Начать рисовать |
| `поднять перо` | Стек | Прекратить рисовать |
| `очистить экран` | Стек | Убрать все следы |
| `цвет пера` | Стек | Установить цвет |
| `толщина перо` | Стек | Установить толщину |
| `штамп` | Стек | Оставить полупрозрачную копию |

## Состояние пера

```typescript
interface PenState {
  isDown: boolean
  color: string       // '#ff0000'
  size: number        // толщина линии
  lines: Array<{      // массив отрезков
    x1, y1, x2, y2: number
    color: string
    size: number
  }>
  stamps: Array<{     // массив штампов
    x, y: number
    direction: number
    size: number
  }>
}
```

## Рисование линий

Линии рисуются при движении спрайта с опущенным пером:

```typescript
case 'move': {
  const prevX = sprite.x
  const prevY = sprite.y
  sprite.x += steps * Math.cos(rad)
  sprite.y += steps * Math.sin(rad)
  if (env.pen.isDown) {
    env.pen.lines.push({
      x1: prevX, y1: prevY,
      x2: sprite.x, y2: sprite.y,
      color: env.pen.color,
      size: env.pen.size
    })
  }
}
```

## Рендеринг

```typescript
// renderer.ts
for (const line of this.pen.lines) {
  ctx.strokeStyle = line.color
  ctx.lineWidth = line.size
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(line.x1, -line.y1)  // Y инвертирован
  ctx.lineTo(line.x2, -line.y2)
  ctx.stroke()
}
```

## Файлы
- `src/blocks/pen.ts`
- `src/runtime/engine.ts` (PenState)
- `src/runtime/interpreter.ts` (pen cases)
- `src/canvas/renderer.ts` (pen rendering)
