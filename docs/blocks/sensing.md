# Датчики

Получение информации из среды.

## Блоки

| Блок | Тип | Описание |
|------|-----|----------|
| `клавиша [пробел] нажата?` | Булев | Состояние клавиши |
| `мышь x` | Репортёр | X позиция мыши |
| `мышь y` | Репортёр | Y позиция мыши |
| `касается края?` | Булев | Столкновение с границей |
| `касается спрайта` | Булев | Столкновение со спрайтом |
| `расстояние до` | Репортёр | Расстояние до спрайта |
| `таймер` | Репортёр | Время с последнего сброса |
| `сбросить таймер` | Стек | Обнулить таймер |
| `свойство [x] спрайта` | Репортёр | Свойство другого спрайта |

## Мышь

Позиция мыши обновляется через `mousemove` на Canvas:

```typescript
// Stage.vue
function handleMouseMove(e: MouseEvent) {
  const mx = (e.clientX - rect.left) * scaleX - 240
  const my = 180 - (e.clientY - rect.top) * scaleY
  emit('mouseMoved', mx, my)
}

// engine.ts
handleMouseMove(x: number, y: number) {
  this.env.mouseX = x
  this.env.mouseY = y
}
```

## Столкновения

```typescript
case 'touching_edge': {
  const halfW = 240, halfH = 180
  return sprite.x >= halfW || sprite.x <= -halfW ||
         sprite.y >= halfH || sprite.y <= -halfH
}

case 'touching_sprite': {
  const other = env.sprites.find(s => s.name === node.sprite)
  const dx = sprite.x - other.x
  const dy = sprite.y - other.y
  return Math.sqrt(dx*dx + dy*dy) < threshold
}
```

## Файлы
- `src/blocks/sensing.ts`
- `src/runtime/engine.ts` (handleMouseMove, isKeyPressed)
