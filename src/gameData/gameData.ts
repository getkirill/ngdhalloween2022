import { BoughtBuilding, UnlockedUpgrade } from "./types";

const gameData: {
	pumpkins: number;
	unlockedUpgrades: { [key: string]: UnlockedUpgrade };
	buildings: { [key: string]: BoughtBuilding };
} = (window.localStorage.getItem("save-data") != null
	? JSON.parse(window.localStorage.getItem("save-data") as string)
	: null) || {
		pumpkins: 0,
		unlockedUpgrades: {},
		buildings: {},
	}

export default gameData
