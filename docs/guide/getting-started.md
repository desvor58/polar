# Начало работы

## Предварительные требования

- Node.js ≥ 18
- pnpm

## Установка

```bash
git clone https://github.com/user/polar.git
cd polar
pnpm install
```

## Запуск

```bash
# Редактор (http://localhost:5173)
pnpm dev

# Backend API (http://localhost:3001)
pnpm dev:server
```

## Структура проекта

```
polar/
├── packages/
│   ├── editor/          # Vue 3 фронтенд
│   │   ├── src/
│   │   │   ├── App.vue           # Главный layout
│   │   │   ├── blocks/           # Определения блоков Blockly
│   │   │   ├── runtime/          # Компилятор + интерпретатор
│   │   │   ├── canvas/           # Рендерер сцены
│   │   │   └── components/       # Vue компоненты
│   │   └── vite.config.ts
│   └── server/          # Express API
│       └── src/
│           ├── index.ts
│           ├── routes/
│           └── storage/
├── docs/                # MkDocs документация
└── mkdocs.yml
```

## Как программировать

1. Перетаскивайте блоки из палитры (слева) в рабочую область
2. Соединяйте блоки друг с другом
3. Начните с блока **«when ▶ clicked»** (категория «События»)
4. Нажмите зелёную кнопку ▶ для запуска
5. Нажмите красную кнопку ■ для остановки

## Пример программы

```
when ▶ clicked
├── pen clear
├── pen down
├── forever
│   ├── move (3) steps
│   ├── turn ↻ (1) degrees
│   └── if touching edge?
│       └── bounce
```

Эта программа рисует спираль, отскакивая от краёв сцены.
