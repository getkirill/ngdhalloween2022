import { Language } from "../localisation";

const ukrainian: Language = {
  "game.name": "ГарбузКлікер",
  "language.english": "Англійська",
  "language.russian": "Русский",
  "language.unlocalised": "Без локалізації (дебаг)",
  "language.ukrainian": "🇺🇦 Український",
  "game.mainmenu.button.play": "▶️ Грати",
  "game.pumpkins": "Гарбузи",
  "game.save": "Зберегти гру",
  "game.heading.buildings": "Будівлі",
  "game.heading.upgrades": "Поліпшення",
  "game.heading.stats": "Статистика",
  "game.author": "Автори:",
  "article.and": "і",
  "game.withloveforjam": "зроблено з ❤️ для NGD Halloween JAM 2022 🎃",
  "game.stat.cursor-speed": "Швидкість курсору",
  "game.stat.passive-income": "Пасивний дохід",
  ...(() =>
    Object.fromEntries(
      new Map(
        [1, 2, 3, 4, 5].map((x) => [
          `game.upgrade.spook-season-${x}`,
          `Місяць Хеллоуїна ${x}`,
        ])
      )
    ))(),
  "game.upgrade.jack-o-lantern": "Джек, що світиться",
  "game.building.factory": "Фабрика гарбузів",
  "legal.cookies":
    "Ми використовуємо одну куки для збереження мови. Ми повинні повідомити про це тому, що закони закони. Продовжуючи використовувати/грати цей сайт/у гру, ви погоджуєтесь з використанням цього єдиного кукі. 🍪",
  "legal.localstorage":
    "Ми також використовуємо локальне сховище (localStorage) для збереження прогресу у грі.",
  "game.upgrade.noupgrades": "Немає доступних покращень.",
  "game.building.bank": "Гарбузовий банк",
  "game.building.farmer": "Фермер гарбуз",
  "game.building.farm": "Ферма гарбуз",
  "game.building.space-exploration": "Центр дослідження космосу за гарбузами",
  "game.building.nobuildings": "Немає доступних споруд.",
  "small-screen": "Ваш екран менше 612 пікселів.",
};

export default ukrainian;
