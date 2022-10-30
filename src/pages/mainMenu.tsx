import languages, { languageProgress, translate, useLanguage } from "../localisation";
import Button from "../components/UI/button";
import '../styles/mainMenu.scss'
import { useNavigate } from "react-router-dom";
import { ChangeEventHandler } from "react";
import Select from "../components/UI/select";

export default function MainMenu() {
  const [reactLanguage, setLanguage] = useLanguage();
  const onSelectLanguage: ChangeEventHandler = (e) => {
    setLanguage((e.target as HTMLSelectElement).value)
  }
  let navigate = useNavigate()
  return (
    <>
      <Select className="locale-select" value={reactLanguage} onChange={onSelectLanguage} options={Object.entries(languages).map(([name, _]) => ({ value: name, content: (reactLanguage != name ? `${translate(`language.${name}`, name)} - ` : '') + translate(`language.${name}`) + (languageProgress(name)[0] != 1 && name != "unlocalised" && name != "english" ? ` (${(languageProgress(name)[0] * 100).toFixed(0)}%, ${languageProgress(name)[1]} / ${languageProgress(name)[2]})` : '') }))} />
      {/* <select value={reactLanguage} className="locale-select" onChange={onSelectLanguage}>
        {Object.entries(languages).map(([name, _]) => name).map(_language => <option value={_language}>{reactLanguage != _language && `${translate(`language.${_language}`, _language)} - `}{translate(`language.${_language}`)}</option>)}
      </select> */}
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
