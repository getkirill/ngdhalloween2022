import { useEffect } from 'react';
import { availableBuildings, availableUpgrades } from '../gameData/availables';
import usePumpkins from '../gameData/usePumkins';
import stat from '../gameData/stat';
import gameData from '../gameData/gameData';
import useSave from "../gameData/useSave"
import { useUnlockBuilding, useUnlockUpgrade } from '../gameData/unlocks';
import { upgradeCost, buildingCost } from '../gameData/costs';

import { translate } from '../localisation'
import '../styles/gameScene.scss'

export default function GameScene() {
  const [pumpkins, incrementPumpkins, setPumpkins, reloadPumpkins] = usePumpkins();
  const save = useSave();
  useEffect(() => {
    const interval = setInterval(() => {
      setPumpkins(pumpkins + stat('passive-income'))
    }, 1000)
    return () => clearInterval(interval)
  })
  const unlockUpgrade = useUnlockUpgrade()
  const unlockUpgradeFor = (name: string) => () => { unlockUpgrade(name); reloadPumpkins() }
  const unlockBuilding = useUnlockBuilding()
  const unlockBuildingFor = (name: string) => () => { unlockBuilding(name); reloadPumpkins() }
  return (
    <div className='game-scene'>
      <div className="main">
        <p className='pumpkin-counter'>{translate('game.pumpkins')}: {pumpkins.toFixed(0)} 🎃</p>
        <div className="wrapper">
          <img className='george' src="resources/george.png" alt="George, pumpkin you need to click." onClick={incrementPumpkins} />
        </div>
        <button className='button accent small' onClick={save}>Save game</button>
      </div>
      <div className="upgrades">
        <div className='buildings'>
          <h2>{translate('game.heading.buildings')}</h2>
          <div>
            {availableBuildings().map(([name, building]: any[]) => <div className='building' onClick={unlockBuildingFor(name)}><span>{translate(`game.building.${name}`)} ({gameData.buildings[name] ? gameData.buildings[name].amount : 0})</span><span>{buildingCost(gameData.buildings[name] || building)}🎃</span></div>)}
          </div>
        </div>
        <div className='upgrades'>
          <h2>{translate('game.heading.upgrades')}</h2>
          <div>
            {availableUpgrades().map(([name, upgrade]: any[]) => <div className='upgrade' onClick={unlockUpgradeFor(name)}><span>{translate(`game.upgrade.${name}`)}{upgrade.infiniteUpgrade && ` (${gameData.unlockedUpgrades[name] ? gameData.unlockedUpgrades[name].level : 0})`}</span><span>{upgradeCost(gameData.unlockedUpgrades[name] || upgrade)}🎃</span></div>)}
          </div>
        </div>
        <div className='stats'>
          <h2>{translate('game.heading.stats')}</h2>
          <div>
            <span>
              {translate('game.stat.cursor-speed')}: {stat('cursor-speed').toFixed(1)}
            </span>
            <span>
              {translate('game.stat.passive-income')}: {stat('passive-income').toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}