import { Dispatch } from 'redux'
import { getArticleList } from '../apis'
import * as constants from '../constants'

export interface IArticleListAction {
	type: string,
	list?: Array<object>
	id?: string
}

export function receiveArticleList (list: Array<object>) {
	return {
		type: constants.RECEIVE_ARTICLE_LIST,
		list: list
	}
}

/**
 * 查询文章列表
 */
export function fetchArticleList () {
	return async (dispatch: Dispatch<any>) => {
		try {
			const res: any = await getArticleList()
			dispatch(receiveArticleList(res.data))
		} catch (err) {
			console.log(err)
		}
	}
}

/**
 * 删除文章
 */
export function deleteArticle (id: string) {
	return {
		type: constants.DELETE_ARTICLE,
		id: id
	}
}