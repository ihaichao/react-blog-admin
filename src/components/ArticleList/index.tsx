import React from 'react'
import { connect, Dispatch } from 'react-redux'
import { Table, Button } from 'antd'
import * as actions from '../../actions'

// interface ArticleItem {
//   key: string,
//   title: string,
// }

const columns = [{
  title: '文章标题',
  dataIndex: 'title',
  key: 'title'
}, {
  title: '文章标签',
  dataIndex: 'tag',
  key: 'tag'
}, {
  title: '创建时间',
  dataIndex: 'createTime',
  key: 'createTime'
}, {
  title: '操作',
  dataIndex: 'action',
  render: (text: any, record: any) => (
    <div>
      <Button type="danger" onClick={() => this.handleDelete(text, record)}>删除</Button>
    </div>
  )
}];

interface Props {
  articleList: Array<object>,
  dispatch: Dispatch<actions.ArticleListAction>
}

class ArticleList extends React.Component<Props> {
  componentDidMount() {
    this.props.dispatch(actions.fetchArticleList())
  }

  handleDelete () {
    console.log(1)
  }

	render() {
    const { articleList } = this.props
		return (
			<Table columns={columns} dataSource={articleList} />
		)
	}
}

const mapStateToProps = (state: any) => {
  return {
    articleList: state.article.articleList
  }
}

export default connect(mapStateToProps)(ArticleList)