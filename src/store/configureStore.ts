import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import articleList from '../reducers/index'

const finalCreateStore = compose(
	applyMiddleware(ThunkMiddleware)
)(createStore)

const reducer = combineReducers({
	articleList
})

export default function configureStore() {
	const store = finalCreateStore(
		reducer
	)
	return store
}