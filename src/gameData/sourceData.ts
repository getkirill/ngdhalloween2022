import { Stat, Upgrade, Building } from "./types";

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
				multiplier: +1,
			},
		],
		cost: 10,
	},
	"spook-season-2": {
		modifiers: [
			{
				stat: "cursor-speed",
				multiplier: +2,
			},
		],
		dependsOn: ["spook-season-1"],
		cost: 20,
	},
	"spook-season-3": {
		modifiers: [
			{
				stat: "cursor-speed",
				multiplier: +4,
			},
		],
		dependsOn: ["spook-season-2"],
		cost: 50,
	},
	"spook-season-4": {
		modifiers: [
			{
				stat: "cursor-speed",
				multiplier: +8,
			},
		],
		dependsOn: ["spook-season-3"],
		cost: 150,
	},
	"spook-season-5": {
		modifiers: [
			{
				stat: "cursor-speed",
				multiplier: +10,
			},
		],
		dependsOn: ["spook-season-4"],
		cost: 500,
	},
	//#endregion
	"jack-o-lantern": {
		infiniteUpgrade: true,
		modifiers: [
			{
				stat: "cursor-speed",
				bias: +0.4,
			},
			{
				stat: "meta.upgrade-cost",
				multiplier: 4,
			},
		],
		cost: 30,
	}
};

export const buildings: { [key: string]: Building } = {
	farmer: {
		cost: 10,
		modifiers: [
			{
				stat: "passive-income",
				multiplier: 0.1,
			},
			{
				stat: "meta.upgrade-cost",
				multiplier: 3,
			},
		],
	},
	farm: {
		cost: 100,
		modifiers: [
			{
				stat: "passive-income",
				bias: 1,
			},
			{
				stat: "meta.upgrade-cost",
				multiplier: 1.5,
			},
		],
	},
	factory: {
		cost: 1000,
		modifiers: [
			{
				stat: "passive-income",
				bias: 10,
			},
			{
				stat: "meta.upgrade-cost",
				multiplier: 1.5,
			},
		],
	},
	bank: {
		cost: 50_000,
		modifiers: [
			{
				stat: "passive-income",
				bias: 70,
			},
			{
				stat: "meta.upgrade-cost",
				multiplier: 1.5,
			},
		],
	},
	"space-exploration": {
		cost: 500_000,
		modifiers: [
			{
				stat: "passive-income",
				bias: 500,
			},
			{
				stat: "meta.upgrade-cost",
				multiplier: 1.5,
			},
		],
	},
	"multiverse": {
		cost: 10_000_000_000_000,
		modifiers: [
			{
				stat: "passive-income",
				bias: 10_000,
			},
			{
				stat: "meta.upgrade-cost",
				multiplier: 1.5,
			},
		],
	},
};
