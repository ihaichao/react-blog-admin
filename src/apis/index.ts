import axios from 'axios'
import './axios.config'

interface ICreateArticleParams {
	title: string,
	tag?: string,
	content: '',
	createTime?: Date,
	updateTime?: Date
}

export async function createArticle (params: ICreateArticleParams) {
	return axios.post('/articles', params)
}

export async function getArticleList () {
	return axios.get('/articles')
}

export async function deleteArticle (id: string) {
	return axios.delete(`/articles/${id}`)
}

export async function login (username: string, password: string) {
	return axios.post('/login', {
		username: username,
		password: password
	})
}