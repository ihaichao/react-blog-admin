import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import store from './store/configureStore'
import './index.styl'

ReactDOM.render(
	<Provider store={store()}>
		{routes}
	</Provider>,
	document.getElementById('root') as HTMLElement
)
