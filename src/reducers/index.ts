import { StoreState } from '../types'
import { ArticleListAction } from '../actions'

// interface articleList {
// 	Array<>
// }
const initialState = {
	articleList: []
}

export default function articleList (state: StoreState = initialState, action: ArticleListAction) {
	switch (action.type) {
		case 'RECEIVE_ARTICLE_LIST':
			return Object.assign({}, state, { articleList: action.list })
		case 'DELETE_ARTICLE':
			return Object.assign({}, state, { articleList: state.articleList.filter(item => item.id !== action.id)})
		default:
			return state
	}
}