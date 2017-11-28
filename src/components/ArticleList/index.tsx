import React from 'react'
import { Table } from 'antd'

const dataSource = [{
  key: '1',
  title: '胡彦斌',
  tag: 32,
  date: '西湖区湖底公园1号'
}, {
  key: '2',
  title: '胡彦祖',
  tag: 42,
  date: '西湖区湖底公园1号'
}];

const columns = [{
  title: '标题',
  dataIndex: 'title',
  key: 'title'
}, {
  title: '标签',
  dataIndex: 'tag',
  key: 'tag'
}, {
  title: '日期',
  dataIndex: 'date',
  key: 'date'
}];

interface AppProps {}

interface AppState {}

class ArticleList extends React.Component<AppProps, AppState> {
	render() {
		return (
			<Table columns={columns} dataSource={dataSource} />
		)
	}
}

export default ArticleList