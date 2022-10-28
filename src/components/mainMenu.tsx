import { translate } from "../localisation";
import Button from "./UI/button";
import '../styles/mainMenu.scss'
import { useNavigate } from "react-router-dom";

export default function MainMenu() {
  let navigate = useNavigate()
  return (
    <div className="main-menu">
      <div className="interface">
        <h1>
          {translate("game.name")}
        </h1>
        <span>
          by <a href="https://links.kraskaska.com">Kraskaska</a> and <a href="https://github.com/Philainel">Philainel</a>
        </span>
        <span>
          with ❤️ for NGD Halloween JAM 2022 🎃
        </span>
        <Button type="accent" onClick={() => { navigate('/') }}>Play</Button>
      </div>
    </div>
  );
}
