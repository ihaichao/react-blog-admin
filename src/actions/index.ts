import { getArticleList } from '../apis'
import * as constants from '../constants'

export interface ArticleListAction {
	type: constants.RECEIVE_ARTICLE_LIST,
	list: Array<object>
}

export function receiveArticleList (list: Array<object>) {
	return {
		type: constants.RECEIVE_ARTICLE_LIST,
		list: list
	}
}

export function fetchArticleList () {
	return async (dispatch: any, getState: any) => {
		try {
			const res: any = await getArticleList()
			dispatch(receiveArticleList(res.data))
		} catch (err) {
			console.log(err)
		}
	}
}