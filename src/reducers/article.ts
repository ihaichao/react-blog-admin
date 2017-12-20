import { IArticleListAction } from '../actions'

const initialState = {
	articleList: []
}

export interface IArticleState {
  articleList: Array<IArticle>
}

export function article (state: IArticleState = initialState, action: IArticleListAction) {
	switch (action.type) {
		case 'RECEIVE_ARTICLE_LIST':
			return Object.assign({}, state, { articleList: action.list })
		case 'DELETE_ARTICLE':
			return Object.assign({}, state, { articleList: state.articleList.filter(item => item.id !== action.id)})
		default:
			return state
	}
}