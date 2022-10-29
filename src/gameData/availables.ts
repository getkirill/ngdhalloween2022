import gameData from "./gameData";
import { upgrades, buildings } from "./sourceData";
import { upgradeCost, buildingCost } from "./costs";
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
