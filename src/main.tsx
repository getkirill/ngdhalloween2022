import "./styles/style.scss";
import Page from "./Page";
import { createRoot } from "react-dom/client";
import Twemoji from 'react-twemoji';
import { languageCheck, translate } from "./localisation";

console.log(import.meta.env.MODE)
import.meta.env.DEV && languageCheck()

createRoot(document.querySelector("#root") as Element).render(
  <Twemoji options={{ className: 'twemoji' }}>
    <Page />
  </Twemoji>
);

(document.querySelector("#small-screen") as HTMLDivElement).textContent = translate("small-screen")