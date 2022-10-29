import gameData from "./gameData";
import { useEffect } from "react";

export default function useSave() {
	useEffect(() => {
	  const i = setInterval(() => {
		window.localStorage.setItem("save-data", JSON.stringify(gameData));
	  }, 1000 * 60);
	  return () => clearInterval(i);
	});
	return () =>
	  window.localStorage.setItem("save-data", JSON.stringify(gameData));
  }
  