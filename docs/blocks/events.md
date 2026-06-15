# События

Блоки-шапки — точки входа в программу.

## Блоки

### when ▶ clicked
```
when ▶ clicked
├── ...
```
Запускает скрипт при нажатии зелёной кнопки.

### when [key] key pressed
```
when [пробел] key pressed
├── ...
```
Запускает скрипт при нажатии клавиши. Клавиши: пробел, стрелки, a-z, enter.

### when this sprite clicked
```
when this sprite clicked
├── ...
```
Запускает скрипт при клике на спрайт.

## Реализация

```typescript
// types.ts
type HatTrigger =
  | { type: 'flag_clicked' }
  | { type: 'key_pressed'; key: string }
  | { type: 'sprite_clicked' }

// engine.ts
handleKeyPress(key: string) {
  this.env.setKeyPressed(key, true)
  for (const hat of this.hats) {
    if (hat.trigger.type === 'key_pressed' && hat.trigger.key === key) {
      this.spawnThread(hat)
    }
  }
}
```

## Файл
`src/blocks/events.ts`
