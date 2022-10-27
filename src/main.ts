import "./style.scss";
import "./game";
import { NGDHalloween2022Game } from "./game";

// Because we are not visited frequently chrome doesn't allow autoplay of music. So, we trick it by making a start button that forces user interaction which in turn allows us to play sounds.
(document.querySelector("#start-button") as HTMLButtonElement).addEventListener(
  "click",
  () => {
    document.querySelector("#start-button")?.classList.add("hidden");
    document
      .querySelector(".wrapper:has(#mount-point)")
      ?.classList.remove("hidden");
    new NGDHalloween2022Game(
      document.querySelector("#mount-point") as HTMLCanvasElement
    );
  }
);
