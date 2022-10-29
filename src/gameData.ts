// Module to export all data stuff

import { useEffect, useState } from "react";

/**
 * Stat modifier
 */
export type Modifier = {
  /**
   * stat identifier to apply modifier to.
   */
  stat: string;
  /**
   * floating number to add to multiplier or multiply multiplier by (depending on the context)
   */
  multiplier?: number;
  /**
   * additional bonus
   */
  bias?: number;
};

export type Upgrade = {
  /**
   * To specify price increase, add modifier meta.upgrade.cost
   */
  infiniteUpgrade?: true;
  /**
   * modifiers to apply
   */
  modifiers: Modifier[];
  /**
   * what needs to be unlocked before unlocking this
   */
  dependsOn?: string[];
  /**
   * Cost
   */
  cost: number;
};

export type Building = {
  /**
   * modifiers to apply per building
   */
  modifiers: Modifier[];
  /**
   * Cost
   */
  cost: number;
};

export type BoughtBuilding = Building & {
  amount?: number;
};

type UnlockedUpgrade = Upgrade & {
  unlocked?: true;
  /**
   * Infinite upgrade level
   */
  level?: number;
};

type Stat = {
  multiplierType: "additive" | "multiplicative";
  initial: number;
};

// Initial bias values for stats
export const stats: { [key: string]: Stat } = {
  "cursor-speed": {
    multiplierType: "additive",
    initial: 1,
  },
  "passive-income": {
    multiplierType: "additive",
    initial: 0,
  },
};

/** To localise upgrade names, use game.upgrade.[key] key */
export const upgrades: { [key: string]: Upgrade } = {
  //#region Spook Season 1-5
  "spook-season-1": {
    modifiers: [
      {
        stat: "cursor-speed",
        multiplier: +0.1,
      },
    ],
    cost: 10,
  },
  "spook-season-2": {
    modifiers: [
      {
        stat: "cursor-speed",
        multiplier: +0.1,
      },
    ],
    dependsOn: ["spook-season-1"],
    cost: 20,
  },
  "spook-season-3": {
    modifiers: [
      {
        stat: "cursor-speed",
        multiplier: +0.1,
      },
    ],
    dependsOn: ["spook-season-2"],
    cost: 30,
  },
  "spook-season-4": {
    modifiers: [
      {
        stat: "cursor-speed",
        multiplier: +0.1,
      },
    ],
    dependsOn: ["spook-season-3"],
    cost: 50,
  },
  "spook-season-5": {
    modifiers: [
      {
        stat: "cursor-speed",
        multiplier: +0.1,
      },
    ],
    dependsOn: ["spook-season-4"],
    cost: 80,
  },
  //#endregion
  "jack-o-lantern": {
    infiniteUpgrade: true,
    modifiers: [
      {
        stat: "cursor-speed",
        bias: +0.1,
      },
      {
        stat: "meta.upgrade-cost",
        multiplier: 2,
      },
    ],
    cost: 30,
  },
  /* ...(() => {
    return Object.fromEntries(
      new Map(
        new Array(50).fill(true).map((_, i) => [
          `free-${i + 1}`,
          {
            modifiers: [
              {
                stat: "cursor-speed",
                multiplier: +0.1,
              },
            ],
            cost: 0,
          },
        ])
      )
    );
  })(), */
};

const buildings: { [key: string]: Building } = {
  farmer: {
    cost: 10,
    modifiers: [
      {
        stat: "passive-income",
        bias: 0.1,
      },
      {
        stat: "meta.upgrade-cost",
        multiplier: 1.5,
      },
    ],
  },
  farm: {
    cost: 10,
    modifiers: [
      {
        stat: "passive-income",
        bias: 0.1,
      },
      {
        stat: "meta.upgrade-cost",
        multiplier: 1.5,
      },
    ],
  },
  factory: {
    cost: 10,
    modifiers: [
      {
        stat: "passive-income",
        bias: 0.1,
      },
      {
        stat: "meta.upgrade-cost",
        multiplier: 1.5,
      },
    ],
  },
  bank: {
    cost: 10,
    modifiers: [
      {
        stat: "passive-income",
        bias: 0.1,
      },
      {
        stat: "meta.upgrade-cost",
        multiplier: 1.5,
      },
    ],
  },
  "space-exploration": {
    cost: 10,
    modifiers: [
      {
        stat: "passive-income",
        bias: 0.1,
      },
      {
        stat: "meta.upgrade-cost",
        multiplier: 1.5,
      },
    ],
  },
};

export let gameData: {
  pumpkins: number;
  unlockedUpgrades: { [key: string]: UnlockedUpgrade };
  buildings: { [key: string]: BoughtBuilding };
} = (window.localStorage.getItem("save-data") != null
  ? JSON.parse(window.localStorage.getItem("save-data") as string)
  : null) || {
  pumpkins: 0,
  unlockedUpgrades: {},
  buildings: {},
};

export function usePumpkins(): [
  number,
  () => void,
  (n: number) => void,
  () => void
] {
  const [pumpkins, setPumpkins] = useState<number>(gameData.pumpkins);
  return [
    pumpkins,
    () => {
      gameData.pumpkins += stat("cursor-speed");
      setPumpkins(gameData.pumpkins);
    },
    (n: number) => {
      gameData.pumpkins = n;
      setPumpkins(n);
    },
    () => {
      setPumpkins(gameData.pumpkins);
    },
  ];
}

/**
 * Calculates stat value based on upgrades
 * @param statName Name of stat
 * @param unlockedUpgrades Upgrades unlocked
 */
export function stat(statName: string): number {
  const upgradeStat = (() => {
    const biases: { [key: string]: number } = {};
    const multipliers: { [key: string]: number } = {};
    for (const unlockedUpgrade of Object.entries(gameData.unlockedUpgrades).map(
      ([_, upgrade]) => upgrade
    )) {
      for (const modifier of unlockedUpgrade.modifiers) {
        if (modifier.bias) {
          biases[modifier.stat] =
            (biases[modifier.stat] || 0) +
            (unlockedUpgrade.infiniteUpgrade
              ? modifier.bias * (unlockedUpgrade.level as number)
              : modifier.bias);
        }
        if (modifier.multiplier)
          multipliers[modifier.stat] =
            stats[statName].multiplierType == "multiplicative"
              ? (multipliers[modifier.stat] || 1) *
                (unlockedUpgrade.infiniteUpgrade
                  ? modifier.multiplier * (unlockedUpgrade.level as number)
                  : modifier.multiplier)
              : (multipliers[modifier.stat] || 1) +
                (unlockedUpgrade.infiniteUpgrade
                  ? modifier.multiplier * (unlockedUpgrade.level as number)
                  : modifier.multiplier);
      }
    }
    return [biases[statName] || 0, multipliers[statName] || 1];
  })();
  const buildingStat = (() => {
    const biases: { [key: string]: number } = {};
    const multipliers: { [key: string]: number } = {};
    for (const building of Object.entries(gameData.buildings).map(
      ([_, upgrade]) => upgrade
    )) {
      for (const modifier of building.modifiers) {
        if (modifier.bias) {
          biases[modifier.stat] =
            (biases[modifier.stat] || 0) +
            modifier.bias * ((building.amount as number) || 0);
        }
        if (modifier.multiplier)
          multipliers[modifier.stat] =
            stats[statName].multiplierType == "multiplicative"
              ? (multipliers[modifier.stat] || 1) *
                (modifier.multiplier * ((building.amount as number) || 0))
              : (multipliers[modifier.stat] || 1) +
                modifier.multiplier * ((building.amount as number) || 0);
      }
    }
    return [biases[statName] || 0, multipliers[statName] || 1];
  })();
  return (
    (stats[statName].initial + upgradeStat[0] + buildingStat[0]) *
    upgradeStat[1] *
    buildingStat[1]
  );
}

export function availableUpgrades() {
  return Object.entries(upgrades)
    .filter(
      // Not unlocked, or infinite
      ([name, upgrade]) =>
        !gameData.unlockedUpgrades[name] || upgrade.infiniteUpgrade == true
    )
    .filter(
      // has no dependencies, or all dependencies are unlocked
      ([_, upgrade]) =>
        !upgrade.dependsOn ||
        upgrade.dependsOn
          .map((dependency) => !!gameData.unlockedUpgrades[dependency])
          .reduce((prev, curr) => prev && curr, true)
    )
    .filter(
      ([name, upgrade]) =>
        gameData.pumpkins >=
        upgradeCost(gameData.unlockedUpgrades[name] || upgrade)
    );
}

export function availableBuildings() {
  return Object.entries(buildings).filter(
    ([name, building]) =>
      gameData.pumpkins >= buildingCost(gameData.buildings[name] || building)
  );
}

export function unlockUpgrade(name: string) {
  const upgradeData = upgrades[name];
  if (
    !availableUpgrades()
      .map(([name]) => name)
      .includes(name)
  )
    throw new Error("Cannot unlock " + name);
  if (
    gameData.pumpkins <
    upgradeCost(gameData.unlockedUpgrades[name] || upgradeData)
  )
    throw new Error("Cannot unlock " + name);
  gameData.pumpkins -= upgradeCost(
    gameData.unlockedUpgrades[name] || upgradeData
  );
  if (upgradeData.infiniteUpgrade) {
    if (gameData.unlockedUpgrades[name]) {
      gameData.unlockedUpgrades[name] = {
        ...gameData.unlockedUpgrades[name],
        level: (gameData.unlockedUpgrades[name].level || 1) + 1,
      };
    } else gameData.unlockedUpgrades[name] = { ...upgradeData, level: 1 };
  } else gameData.unlockedUpgrades[name] = { ...upgradeData, unlocked: true };
}

export function useUnlockUpgrade(): (name: string) => void {
  const [, set] = useState({});
  return (name: string) => {
    unlockUpgrade(name);
    set({});
  };
}

export function unlockBuilding(name: string) {
  const buildingData = buildings[name];
  if (
    !availableBuildings()
      .map(([name]) => name)
      .includes(name)
  )
    throw new Error("Cannot unlock " + name);
  if (
    gameData.pumpkins < buildingCost(gameData.buildings[name] || buildingData)
  )
    throw new Error("Cannot unlock building");
  gameData.pumpkins -= buildingCost(gameData.buildings[name] || buildingData);
  if (gameData.buildings[name]) {
    gameData.buildings[name] = {
      ...gameData.buildings[name],
      amount: (gameData.buildings[name].amount || 0) + 1,
    };
  } else gameData.buildings[name] = { ...buildingData, amount: 1 };
}

export function useUnlockBuilding(): (name: string) => void {
  const [, set] = useState({});
  return (name: string) => {
    unlockBuilding(name);
    set({});
  };
}
export function upgradeCost(upgrade: UnlockedUpgrade) {
  return upgrade.infiniteUpgrade
    ? (upgrade.cost +
        (Object.fromEntries(upgrade.modifiers.map((x) => [x.stat, x]))[
          "meta.upgrade-cost"
        ].bias || 0) *
          ((upgrade.level || 0) + 1)) *
        ((Object.fromEntries(upgrade.modifiers.map((x) => [x.stat, x]))[
          "meta.upgrade-cost"
        ].multiplier || 1) *
          ((upgrade.level || 0) + 1))
    : upgrade.cost;
}
export function buildingCost(building: BoughtBuilding) {
  return (
    (building.cost +
      (Object.fromEntries(building.modifiers.map((x) => [x.stat, x]))[
        "meta.upgrade-cost"
      ].bias || 0) *
        ((building.amount || 0) + 1)) *
    ((Object.fromEntries(building.modifiers.map((x) => [x.stat, x]))[
      "meta.upgrade-cost"
    ].multiplier || 1) *
      ((building.amount || 0) + 1))
  );
}

export function useSave() {
  useEffect(() => {
    const i = setInterval(() => {
      window.localStorage.setItem("save-data", JSON.stringify(gameData));
    }, 1000 * 60);
    return () => clearInterval(i);
  });
  return () =>
    window.localStorage.setItem("save-data", JSON.stringify(gameData));
}
