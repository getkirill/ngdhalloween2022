import "./styles/style.scss";
import Page from "./Page";
import { createRoot } from "react-dom/client";
import { stat, upgrades } from "./gameData";
import Twemoji from 'react-twemoji';

createRoot(document.querySelector("#root") as Element).render(
  <Twemoji options={{className: 'twemoji'}}>
    <Page />
  </Twemoji>
)