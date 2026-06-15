# Внешний вид

Визуальное отображение спрайта.

## Блоки

| Блок | Тип | Описание |
|------|-----|----------|
| `say (Hello!)` | Стек | Показать речевой пузырь |
| `say (Hello!) for (2) secs` | Стек | Показать на N секунд |
| `think (Hmm...)` | Стек | Пузырь с мыслями |
| `think (Hmm...) for (2) secs` | Стек | Мысли на N секунд |
| `show` | Стек | Сделать видимым |
| `hide` | Стек | Сделать невидимым |
| `set size to (100) %` | Стек | Изменить размер |
| `switch costume to (...)` | Стек | Сменить костюм |

## Речевой пузырь

Рисуется поверх спрайта на Canvas:

```
  ┌──────────────┐
  │   Hello!     │
  └──────┬───────┘
         ▼
        ◆  (спрайт)
```

## Реализация

```typescript
case 'say': {
  const text = String(evalExpr(node.text, sprite, env))
  sprite.sayText = text
  sprite.sayType = 'say'
  if (node.duration) {
    sprite.sayExpiry = Date.now() + dur * 1000
  }
  break
}
```

## Файлы
- `src/blocks/looks.ts`
- `src/canvas/renderer.ts` (drawSpeechBubble)
