import { useState } from "react";
import gameData from "./gameData";
import stat from "./stat";

export default function usePumpkins(): [
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
  