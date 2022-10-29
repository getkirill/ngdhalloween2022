import { useState } from "react";
import { upgrades, buildings } from "./sourceData";
import gameData from "./gameData";
import { availableBuildings, availableUpgrades } from "./availables";
import { upgradeCost, buildingCost } from "./costs";

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