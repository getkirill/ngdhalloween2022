import { Language } from "../localisation";

const english: Language = {
  "legal.cookies":
    "We use one single cookie to set your language. We had to say this because laws laws. By continuing playing or using this website/game, you accept our use of this one single cookie. 🍪",
  "legal.localstorage":
    "We also use your broswer local storage to save progress.",
  "language.english": "🇺🇸 English",
  "language.russian": "Russian",
  "language.unlocalised": "Unlocalised (debug)",
  "game.name": "PumpkinClicker",
  "game.author": "by",
  "article.and": "and",
  "game.withloveforjam": "with ❤️ for NGD Halloween JAM 2022 🎃",
  "game.mainmenu.button.play": "▶️ Play",
  "game.heading.upgrades": "Upgrades",
  "game.heading.buildings": "Buildings",
  "game.heading.stats": "Stats",
  "game.pumpkins": "Pumpkins",
  ...(() =>
    Object.fromEntries(
      new Map(
        [1, 2, 3, 4, 5].map((x) => [
          `game.upgrade.spook-season-${x}`,
          `Spook Season ${x}`,
        ])
      )
    ))(),
  "game.upgrade.jack-o-lantern": "Jack-o-Lantern",
  "game.ubgrade.noupgrades": "Couldn't upgrade anything.",
  "game.building.factory": "Pumpkin Factory",
  "game.building.bank": "Pumpkin Bank",
  "game.building.farmer": "Pumpkin Farmer",
  "game.building.farm": "Pumpkin Farm",
  "game.building.space-exploration": "Pumpkin Space Exploration",
  "game.building.nobuildings": "There's no buildings to buy.",
  "game.stat.cursor-speed": "Cursor Speed",
  "game.stat.passive-income": "Passive Invome (per sec)",
};

export default english;
