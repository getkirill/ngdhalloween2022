import languages, { changeLanguage, language, translate, useLanguage } from "../localisation";
import Button from "./UI/button";
import '../styles/mainMenu.scss'
import { useNavigate } from "react-router-dom";
import { ChangeEventHandler, EventHandler, ReactEventHandler, useEffect } from "react";

export default function MainMenu() {
  const [reactLanguage, setLanguage] = useLanguage();
  const onSelectLanguage: ChangeEventHandler = (e) => {
    setLanguage((e.target as HTMLSelectElement).value)
  }
  let navigate = useNavigate()
  return (
    <>
      <select value={reactLanguage} className="locale-select" onChange={onSelectLanguage}>
        {Object.entries(languages).map(([name, _]) => name).map(_language => <option value={_language}>{reactLanguage != _language && `${translate(`language.${_language}`, _language)} - `}{translate(`language.${_language}`)}</option>)}
      </select>
      <div className="main-menu">
        <div className="interface">
          <h1>
            {translate("game.name")}
          </h1>
          <span>
            {translate('game.author')} <a href="https://links.kraskaska.com">Kraskaska</a> 🔗 {translate('article.and')} <a href="https://github.com/Philainel">Philainel</a> 🔗
          </span>
          <span>
            {translate('game.withloveforjam')}
          </span>
          <Button type="accent" onClick={() => { navigate('/game') }}>{translate("game.mainmenu.button.play")}</Button>
          <small>{translate('legal.cookies')}</small>
          <small>{translate('legal.localstorage')}</small>
        </div>
      </div>
    </>
  );
}
