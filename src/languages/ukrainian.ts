import { Language } from "../localisation";

const ukranian: Language = {
  "language.english": "Англійська",
  "language.russian": "Російська",
  "language.ukrainian": "🇺🇦 Український",
  "language.unlocalised": "Без локалізації (дебаг)",
  "game.name": "ГарбузКлікер", // no need for that i guess
  "game.author": "Автори:",
  "article.and": "і",
  "game.mainmenu.button.play": "▶️ Гарти",
  "game.withloveforjam": "зроблено з ❤️ для NGD Halloween JAM 2022 🎃",
  "game.heading.upgrades": "Поліпшення",
  "game.heading.buildings": "Будівлі",
  "game.heading.stats": "Статистика",
  "game.pumpkins": "Гарбузи",
  ...(() =>
    Object.fromEntries(
      new Map(
        [1, 2, 3, 4, 5].map((x) => [
          `game.upgrade.spook-season-${x}`,
          `Місяць Хелловіна ${x}`,
        ])
      )
    ))(),
  "game.upgrade.jack-o-lantern": "Світильник Джека",
  "game.building.factory": "Фабрика гарбузів",
  "game.stat.cursor-speed": "Швидкість курсору",
  "game.stat.passive-income": "Пасивний дохід (сек.)",
  "legal.cookies":
    "Ми використовуємо одну cookie для збереження мови. Ми повинні повідомити про це тому, що закони закони. Продовжуючи використовувати/грати цей сайт/у гру, ви погоджуєтесь з використанням цього єдиного кукі. 🍪",
  "legal.localstorage":
    "Ми також використовуємо локальне сховище (localStorage) для збереження прогресу у грі.",
  "game.upgrade.noupgrades": "Немає доступних покращень.",
  "game.building.bank": "Гарбузовий банк",
  "game.building.farmer": "Фермер гарбузів",
  "game.building.farm": "Ферма гарбузів",
  "game.building.space-exploration": "Центр дослідження космосу за гарбузами",
  "game.building.nobuildings": "Немає доступних споруд.",
  "game.save": "Зберегти гру",
  "small-screen": "Ваш екран менше 612 пікселів.",
};

export default ukranian;
