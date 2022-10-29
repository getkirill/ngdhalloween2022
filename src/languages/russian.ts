import { Language } from "../localisation"

const russian: Language = {
  "language.english": "Английский",
  "language.russian": "🇷🇺 Русский",
  "language.unlocalised": "Без локализации (дебаг)",
  'game.name': 'ТыквоКликер', // no need for that i guess
  "game.author": "Авторы:",
  "article.and": "и",
  'game.mainmenu.button.play': '▶️ Играть',
  "game.withloveforjam": "сделано с ❤️ для NGD Halloween JAM 2022 🎃",
  "game.heading.upgrades": "Улучшения",
  "game.heading.buildings": "Строения",
  "game.heading.stats": "Статистика",
  "game.pumpkins": "Тыквы",
  ...(() =>
    Object.fromEntries(
      new Map(
        [1, 2, 3, 4, 5].map((x) => [
          `game.upgrade.spook-season-${x}`,
          `Месяц Хеллуина ${x}`,
        ])
      )
    ))(),
  "game.upgrade.jack-o-lantern": "Светящийся Джек",
  "game.building.factory": "Фабрика тыкв",
  "game.stat.cursor-speed": "Скорость курсора",
  "game.stat.passive-income": "Пассивный доход (сек.)",
}

export default russian