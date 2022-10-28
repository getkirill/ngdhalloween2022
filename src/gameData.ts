// Module to export all data stuff

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
  speed: {
    multiplierType: "additive",
    initial: 1,
  }, // Mouse click amount
};

/** To localise upgrade names, use game.upgrade.[key] key */
export const upgrades: { [key: string]: Upgrade } = {
  //#region Spook Season 1-5
  "spook-season-1": {
    modifiers: [
      {
        stat: "speed",
        multiplier: +0.5,
      },
    ],
    cost: 10,
  },
  "spook-season-2": {
    modifiers: [
      {
        stat: "speed",
        multiplier: +0.5,
      },
    ],
    dependsOn: ["spook-season-1"],
    cost: 20,
  },
  "spook-season-3": {
    modifiers: [
      {
        stat: "speed",
        multiplier: +0.5,
      },
    ],
    dependsOn: ["spook-season-2"],
    cost: 30,
  },
  "spook-season-4": {
    modifiers: [
      {
        stat: "speed",
        multiplier: +0.5,
      },
    ],
    dependsOn: ["spook-season-3"],
    cost: 50,
  },
  "spook-season-5": {
    modifiers: [
      {
        stat: "speed",
        multiplier: +0.5,
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
        stat: "speed",
        bias: +1,
      },
      {
        stat: "meta.upgrade-cost",
        multiplier: 0.5,
      },
    ],
    cost: 10,
  },
};

/**
 * Calculates stat value based on upgrades
 * @param statName Name of stat
 * @param unlockedUpgrades Upgrades unlocked
 */
export function stat(
  statName: string,
  unlockedUpgrades: UnlockedUpgrade[]
): number {
  // Filter unneccessary upgrades
  unlockedUpgrades = unlockedUpgrades.filter(
    (uu) =>
      uu.modifiers.filter((modifier) => modifier.stat == statName).length > 0
  );
  const biases: { [key: string]: number } = {};
  const multipliers: { [key: string]: number } = {};
  for (const unlockedUpgrade of unlockedUpgrades) {
    for (const modifier of unlockedUpgrade.modifiers) {
      if (modifier.bias) {
        biases[modifier.stat] =
            (biases[modifier.stat] || stats[statName].initial) + (unlockedUpgrade.infiniteUpgrade ? modifier.bias * (unlockedUpgrade.level as number) : modifier.bias);
      }
      if (modifier.multiplier)
        multipliers[modifier.stat] =
          stats[statName].multiplierType == "multiplicative"
            ? (multipliers[modifier.stat] || 1) * (unlockedUpgrade.infiniteUpgrade ? modifier.multiplier * (unlockedUpgrade.level as number) : modifier.multiplier)
            : (multipliers[modifier.stat] || 1) + (unlockedUpgrade.infiniteUpgrade ? modifier.multiplier * (unlockedUpgrade.level as number) : modifier.multiplier);
    }
  }
  return biases[statName] * multipliers[statName];
}
