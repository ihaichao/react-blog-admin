export interface StoreState {
	articleList: Array<{
		id: string,
		title: string,
		tag?: string,
		content: string,
		createTime: string,
		updateTime: string,
		pageView: number
	}>
}