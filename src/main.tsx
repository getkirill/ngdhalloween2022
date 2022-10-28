import "./styles/style.scss";
import Page from "./Page";
import { createRoot } from "react-dom/client";
import { stat, upgrades } from "./gameData";

console.log(stat("speed", [
  {
    ...upgrades['jack-o-lantern'],
    level: 3
  }
]))

createRoot(document.querySelector("#root") as Element).render(<Page />)