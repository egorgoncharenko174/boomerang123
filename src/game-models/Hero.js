const Boomerang = require("./Boomerang");
// Наш герой.

class Hero {
  constructor({ position, boomerang } = {}) {
    this.skin = "🤠"; // можете использовать любые emoji '💃'
    this.position = position ?? 0;
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

  attack() {
    // Атакуем.
    this.boomerang.fly();
    this.boomerang.position = this.position;
  }

  die() {
    this.skin = "💀";
    console.log("YOU ARE DEAD!💀");
    process.exit();
  }
}

module.exports = Hero;
