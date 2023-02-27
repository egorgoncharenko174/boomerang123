const Game = require("./src/Game");
// Основной файл.
// Запускает игру.

// Инициализация игры с настройками.
const name = process.argv[2];
const game = new Game({

  trackLength: 60,
});

// Запуск игры.

game.play(name);
