import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import { article } from '../reducers'

const finalCreateStore = compose(
	applyMiddleware(ThunkMiddleware)
)(createStore)

const reducer = combineReducers({
	article
})

export default function configureStore() {
	const store = finalCreateStore(
		reducer
	)
	return store
}