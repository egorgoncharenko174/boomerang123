// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(game) {
    const yourTeamName = "Elbrus";

    // Тут всё рисуем.
    console.clear();
    console.log(game.join(""));
    console.log("\n\n");
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
