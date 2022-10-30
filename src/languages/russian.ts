import { Language } from "../localisation";

const russian: Language = {
  "language.english": "Английский",
  "language.russian": "🇷🇺 Русский",
  "language.ukrainian": "Украинский (предварительный)",
  "language.unlocalised": "Без локализации (дебаг)",
  "game.name": "ТыквоКликер", // no need for that i guess
  "game.author": "Авторы:",
  "article.and": "и",
  "game.mainmenu.button.play": "▶️ Играть",
  "game.withloveforjam": "сделано с ❤️ для NGD Halloween JAM 2022 🎃",
  "game.heading.upgrades": "Улучшения",
  "game.heading.buildings": "Постройки",
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
  "legal.cookies":
    "Мы используем одну куки для сохранения языка. Мы должны сообщить об этом потому что законы законы. Продолжая использовать/играть этот сайт/в игру, вы соглашаетесь с использованием этого единственного куки. 🍪",
  "legal.localstorage":
    "Мы также используем локальное хранилище (localStorage) для сохранении прогресса в игре.",
  "game.upgrade.noupgrades": "Нет доступных улучшений.",
  "game.building.bank": "Тыквенный банк",
  "game.building.farmer": "Фермер тыкв",
  "game.building.farm": "Ферма тыкв",
  "game.building.space-exploration": "Центр исследования космоса за тыквами",
  "game.building.nobuildings": "Нет доступных построек.",
  "game.save": "Сохранить игру",
  "small-screen": "Ваш экран менее 612 пикселей.",
};

export default russian;
