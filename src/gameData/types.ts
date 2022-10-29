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

export type UnlockedUpgrade = Upgrade & {
  unlocked?: true;
  /**
   * Infinite upgrade level
   */
  level?: number;
};

export type Stat = {
  multiplierType: "additive" | "multiplicative";
  initial: number;
};