import axios from 'axios'

axios.defaults.baseURL = '//localhost:3001'

interface createArticleParams {
	title: string,
	tag?: string,
	content: '',
	createTime?: Date,
	updateTime?: Date
}
async function createArticle (params: createArticleParams) {
	try {
		const res = await axios.post('/article', params)
		return res
	} catch (err) {
		return console.log(err)
	}
}

export {
	createArticle
}