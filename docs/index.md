# Polar

**Визуальный интерпретируемый язык программирования**

Polar — среда программирования по образцу Scratch/TurboWarp с блочным редактором, 2D-сценой и собственным интерпретатором.

## Быстрый старт

```bash
# Установка
git clone https://github.com/user/polar.git
cd polar
pnpm install

# Запуск
pnpm dev
```

Откройте http://localhost:5173 в браузере.

## Возможности

| Категория | Блоки |
|-----------|-------|
| **События** | when flag clicked, key pressed, sprite clicked |
| **Движение** | move, turn, goto, glide, bounce |
| **Внешний вид** | say, think, show, hide, costume |
| **Управление** | repeat, forever, if/else, wait, stop |
| **Датчики** | key pressed, mouse, touching, distance, timer |
| **Операторы** | math, comparisons, logic, random |
| **Переменные** | create, set, change, show/hide on stage |
| **Перо** | pen down/up, color, size, clear, stamp |
| **Значения** | number, text literals, print |

## Архитектура

```
┌─────────────┐    ┌───────────┐    ┌──────────────┐
│   Blockly    │───▶│ Компилятор│───▶│ Интерпретатор│
│   редактор   │    │  (→ AST)  │    │  (AST → выполнение) │
└─────────────┘    └───────────┘    └──────────────┘
                                              │
                                              ▼
                                       ┌──────────────┐
                                       │    Canvas     │
                                       │   (рендер)    │
                                       └──────────────┘
```

## Стек технологий

- **Frontend**: Vue 3, Vite, Google Blockly
- **Canvas**: HTML5 Canvas 2D
- **Backend**: Node.js, Express
- **Монорепо**: pnpm workspaces
