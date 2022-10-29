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

export const buildings: { [key: string]: Building } = {
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
