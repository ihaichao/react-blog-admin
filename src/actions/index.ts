import { getArticleList } from '../apis'

export const RECEIVE_ARTICLE_LIST = 'RECEIVE_ARTICLE_LIST'

export function receiveArticleList (list: Array<object>) {
	return {
		type: RECEIVE_ARTICLE_LIST,
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