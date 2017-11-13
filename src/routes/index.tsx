import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Page from '../components/Page'
import WriteArticle from '../components/WriteArticle'

export default (
	<Router history={hashHistory}>
		<Route path="/" component={Page}>
			<Route path="/article/write" component={WriteArticle} />
		</Route>
	</Router>
)