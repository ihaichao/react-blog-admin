import React from 'react'
import { connect, Dispatch } from 'react-redux'
import { Table, Popconfirm, Button, message } from 'antd'
import * as actions from '../../actions'
import { deleteArticle } from '../../apis'

interface Props {
  articleList: Array<any>,
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
      key: 'action',
      render: (text: any, record: any) => {
        return (
          <div>
            <Popconfirm title="确定要删除吗?" onConfirm={() => this.handleDelete(record)} okText="确认" cancelText="取消">
              <Button type="danger">删除</Button>
            </Popconfirm>
          </div>
        )
      }
    }]
  }

  componentDidMount() {
    this.props.dispatch(actions.fetchArticleList())
  }

  async handleDelete (record: any) {
    const res: any = await deleteArticle(record.id)
    if (res.data.code === 0) {
      this.props.dispatch(actions.deleteArticle(record.id))
      message.info('删除文章成功')
    } else {
      message.error('删除文章失败')
    }
  }

	render() {
    let { articleList } = this.props
    if (Array.isArray(articleList)) {
      articleList = articleList.map(item => {
        return {
          key: item.id,
          ...item
        }
      })
    } else {
      return []
    }
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