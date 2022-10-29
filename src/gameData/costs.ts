import { UnlockedUpgrade, BoughtBuilding } from "./types";

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