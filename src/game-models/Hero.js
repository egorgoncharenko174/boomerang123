const Boomerang = require("./Boomerang");
// Наш герой.


class Hero {
  constructor({ position } = {}) {
    this.skin = '👲'; // можете использовать любые emoji '💃'
    this.position = position ?? 1;
    this.trackP = 1;
    this.boomerang = new Boomerang();
  }
  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  moveUp() {
    if (this.trackP > 0) {
      this.trackP -= 1;
    }
  }

  moveDown() {
    if (this.trackP < 4) {
      this.trackP += 1;
    }
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
    this.boomerang.position = this.position;
  }
  die() {
    this.skin = '💀';
    console.log('POTRACHENO');
    process.exit();
  }
}

module.exports = Hero;
