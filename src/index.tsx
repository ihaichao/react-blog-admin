// import React from 'react'
import ReactDOM from 'react-dom'
// import App from './containers/App'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import reducer from './reducer'
import routes from './routes'
import './index.styl'

// const store = createStore(reducer)

ReactDOM.render(
	routes,
	document.getElementById('root')
)
