import axios from 'axios'

axios.defaults.baseURL = '//localhost:3001'

interface ICreateArticleParams {
	title: string,
	tag?: string,
	content: '',
	createTime?: Date,
	updateTime?: Date
}
async function createArticle (params: ICreateArticleParams) {
	try {
		const res = await axios.post('/articles', params)
		return res
	} catch (err) {
		return console.log(err)
	}
}

async function getArticleList (): Promise<object> {
	try {
		const res = await axios.get('/articles')
		return res.data
	} catch (err) {
		console.log(err)
		return {}
	}
}

async function deleteArticle (id: string) {
	try {
		const res = await axios.delete(`/articles/${id}`)
		return res
	} catch (err) {
		return console.log(err)
	}
}

export {
	createArticle,
	getArticleList,
	deleteArticle
}