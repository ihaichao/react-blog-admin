import { StoreState } from '../types'
import { ArticleListAction } from '../actions'

const initialState = {
	articleList: []
}

export default function articleList (state: StoreState = initialState, action: ArticleListAction) {
	switch (action.type) {
		case 'RECEIVE_ARTICLE_LIST':
			return Object.assign({}, state, { articleList: action.list })
		default:
			return state
	}
}