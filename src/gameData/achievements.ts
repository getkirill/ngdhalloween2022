export function useAchievement(id: string) {
	return () => {
		if (!getAchievementData(id).shown) {

			getAchievementData(id).shown = true
			waitingAchievements[id]?.map(c => c())
		}

	}
}

export const achievements: AchievmentData[] = [
	{
		id: 'test',
		header: 'TEST',
		content: 'This is the test achievement',
		icon: '/resources/click.svg'
	}
]
export type AchievmentData = {
	id: string,
	header: string,
	content: string,
	icon: string,
	shown?: boolean
}

export function getAchievementData(id: string) {
	return achievements.filter(a => a.id == id)[0] || null
}

let waitingAchievements: { [key: string]: (() => any)[] } = {

}
export function listenAchievement(id: string, callback: () => any) {
	waitingAchievements[id] != null
		?
		waitingAchievements[id].push(callback)
		:
		waitingAchievements[id] = [callback]
}

