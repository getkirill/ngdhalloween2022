import { MouseEventHandler, useEffect } from 'react';
import { availableBuildings, availableUpgrades } from '../gameData/availables';
import usePumpkins from '../gameData/usePumkins';
import stat from '../gameData/stat';
import gameData from '../gameData/gameData';
import useSave from "../gameData/useSave"
import { useUnlockBuilding, useUnlockUpgrade } from '../gameData/unlocks';
import { upgradeCost, buildingCost } from '../gameData/costs';

import { translate } from '../localisation'
import '../styles/gameScene.scss'
import Button from '../components/UI/button';

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

  const onGeorgeClick: MouseEventHandler<HTMLImageElement> =  (e) => {
    e.currentTarget.classList.add("press")
    incrementPumpkins()
    setTimeout((e: HTMLImageElement) => e.classList.remove("press"), 50, e.currentTarget)
  }

  return (
    <div className='game-scene'>
      {/* Main  window */}
      <div className="main">
        <p className='pumpkin-counter'>{translate('game.pumpkins')}: {pumpkins.toFixed(0)} 🎃</p>
        <div className="wrapper">
          <div className="decorations">123</div>
          <img className='george' id="george" src="resources/george.png" alt="George, pumpkin you need to click." onClick={onGeorgeClick} />
        </div>
        <Button type='accent' size='small' onClick={save}>Save game</Button>
      </div>

      { /* Shop window */}

      <div className="shop">

        <div className='buildings'>
          <h2>{translate('game.heading.buildings')}</h2>
          <div>
            {
              ((array) => array.length == 0 ? <span>{translate("game.building.nobuildings")}</span> : array)
                (
                  availableBuildings().map(([name, building]: any[]) =>
                    <div className='building' onClick={unlockBuildingFor(name)}>
                      <span>{translate(`game.building.${name}`)} ({gameData.buildings[name] ? gameData.buildings[name].amount : 0})</span>
                      <span>{buildingCost(gameData.buildings[name] || building)}🎃</span>
                    </div>)
                )
            }
          </div>
        </div>

        <div className='upgrades'>
          <h2>{translate('game.heading.upgrades')}</h2>
          <div>
            {
              ((array) => array.length == 0 ? <span>{translate("game.ubgrade.noupgrades")}</span> : array)
                (
                  availableUpgrades().map(([name, upgrade]: any[]) =>
                    <div className='upgrade' onClick={unlockUpgradeFor(name)}>
                      <span>{translate(`game.upgrade.${name}`)}{upgrade.infiniteUpgrade && ` (${gameData.unlockedUpgrades[name] ? gameData.unlockedUpgrades[name].level : 0})`}</span>
                      <span>{upgradeCost(gameData.unlockedUpgrades[name] || upgrade)}🎃</span>
                    </div>)
                )
            }
          </div>
        </div>

        {/* STATISTICS*/}

        <div className='stats'>
          <h2>{translate('game.heading.stats')}</h2>
          <div>
            <div className='tile'>
              <img src='/resources/click.svg' className="clickSVG" />
              <span>
                {translate('game.stat.cursor-speed')}: {stat('cursor-speed').toFixed(1)}
              </span>
            </div>
            <div className='tile'>
              <img src='/resources/farm.svg' className="farmSVG" />
              <span>
                {translate('game.stat.passive-income')}: {stat('passive-income').toFixed(1)}
              </span>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}