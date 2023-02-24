// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const { User, sequelize } = require("../db/models");
const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
// const Boomerang = require('./game-models/Boomerang');
const View = require("./View");
const { runInteractiveConsole } = require("./keyboard");
// Основной класс игры.
// Тут будут все настройки, проверки, запуск.
async function main(name, score) {
  await User.create({
    name,
    score,
  });
  sequelize.close();
}

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.score = 0;
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
  }

  async check(name) {
    if (this.hero.position === this.enemy.position) {
      await main(name, this.score);
      this.hero.die();
    }
    if (
      this.hero.boomerang.position - 1 === this.enemy.position ||
      this.hero.boomerang.position + 1 === this.enemy.position ||
      this.hero.boomerang.position === this.enemy.position
    ) {
      this.enemy.die();
      this.hero.boomerang.die();
      this.score += 100;
    }
    if (this.hero.boomerang.position < this.hero.position) {
      this.hero.boomerang.die();
    }
  }

  play(name) {
    runInteractiveConsole(this.hero);
    setInterval(() => {
      // Let's play!
      this.check(name);
      this.regenerateTrack();
      this.view.render(this.track);
      this.enemy.moveLeft();
      console.log(`Name: ${name}`);
      console.log(`Score: ${this.score}`);
    }, 150);
  }
}

module.exports = Game;
