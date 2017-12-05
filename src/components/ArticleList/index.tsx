import React from 'react'
import { connect, Dispatch } from 'react-redux'
import { Table, Button } from 'antd'
import * as actions from '../../actions'

interface Props {
  articleList: Array<object>,
  dispatch: Dispatch<actions.ArticleListAction>
}

class ArticleList extends React.Component<Props> {
  get columns() {
    return [{
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
      render: () => {
        return (
          <div>
            <Button type="danger" onClick={this.handleDelete}>删除</Button>
          </div>
        )
      }
    }]
  }

  componentDidMount() {
    this.props.dispatch(actions.fetchArticleList())
  }

  handleDelete = () => {
    console.log(1)
  }

	render() {
    const { articleList } = this.props
    const columns = this.columns
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