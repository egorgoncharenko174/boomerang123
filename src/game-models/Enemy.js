// ะัะฐะณ.
class Enemy {
  constructor() {
    this.generateSkin();
    this.position = Math.floor(Math.random() * (60 - 55) + 55);
    this.trackPe = Math.floor(Math.random() * 5);
  }

  generateSkin() {
    const skins = [
      '๐',
      '๐',
      '๐',
      '๐ฎโโ๏ธ',
      '๐ฎโโ๏ธ',
      '๐',
      '๐ฎโโ๏ธ',
      '๐',
      '๐',
      '๐',
      '๐',
      '๐',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // ะะดัะผ ะฒะปะตะฒะพ.
    this.position -= 1;
  }

  die() {
    this.generateSkin();
    this.position = Math.floor(Math.random() * (60 - 50) + 50);
    this.trackPe = Math.floor(Math.random() * 5);
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
