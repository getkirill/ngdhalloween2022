import gameData from "./gameData";
import { stats } from "./sourceData";
/**
 * Calculates stat value based on upgrades
 * @param statName Name of stat
 * @param unlockedUpgrades Upgrades unlocked
 */
export default function(statName: string): number {
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