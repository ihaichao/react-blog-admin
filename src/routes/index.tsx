import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
// import Page from '../components/Page'
import App from '../containers/App'
import WriteArticle from '../components/WriteArticle'
import ArticleList from '../components/ArticleList'

export default (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/article/write" component={WriteArticle} />
			<Route path="/article/list" component={ArticleList} />
		</Route>
	</Router>
)