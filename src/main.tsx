import "./styles/style.scss";
import "twemoji-colr-font/twemoji.scss"
import Page from "./Page";
import { createRoot } from "react-dom/client";
import { languageCheck, translate } from "./localisation";

console.log(import.meta.env.MODE)
import.meta.env.DEV && languageCheck()

createRoot(document.querySelector("#root") as Element).render(
    <Page />
);

(document.querySelector("#small-screen") as HTMLDivElement).textContent = translate("small-screen")