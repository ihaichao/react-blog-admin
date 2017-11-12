import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import WriteArticle from '../components/WriteArticle'

export default (
	<Router history={hashHistory}>
		<Route path="/article/write" component={WriteArticle} />
	</Router>
)