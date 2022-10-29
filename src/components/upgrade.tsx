import React from "react"
import { translate } from "../localisation"
export default function Upgrade() {
	return (
		<div className='buildings'>
			<h2>{translate('game.heading.buildings')}</h2>
			{/* <div>
				{availableBuildings().map(([name, building]) => <div className='building' onClick={unlockBuildingFor(name)}><span>{translate(`game.building.${name}`)} ({gameData.buildings[name] ? gameData.buildings[name].amount : 0})</span><span>{buildingCost(gameData.buildings[name] || building)}🎃</span></div>)}
			</div> */}
		</div>
	)
}