import { getAchievementData, listenAchievement } from "../gameData/achievements"
import "../styles/components/achievement.scss"
import { AchievementArgs } from "../types/args"

export default function Achievment({ id }: AchievementArgs) {
	let rootId = id+Date.now()
	listenAchievement(id, show)
	function show() {
		let block = document.getElementById(rootId)?.classList
		block?.remove("disabled")
		setTimeout((block: DOMTokenList | undefined) => block?.add("disabled"), 5000, block)
	}
	let achievementData = getAchievementData(id)
	if (!achievementData) {
		console.warn(`Achievement ${id} does not exist!`)
		return <></>
	}
	let { header, content, icon } = achievementData
	return (
		<div className="achievement disabled" id={rootId}>
			<img src={icon} className="icon"></img>
			<div className="text">
				<h4 className="title">{header}</h4>
				<span className="description">{content}</span>
			</div>
		</div>
	)
}
