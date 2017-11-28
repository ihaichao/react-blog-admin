import React from 'react'
import Editor, { ReactMdeCommands, ReactMdeValue } from 'react-mde'
import './index.styl'
import 'react-mde/lib/styles/css/react-mde.css'
import 'react-mde/lib/styles/css/react-mde-command-styles.css'
import 'react-mde/lib/styles/css/markdown-default-theme.css'
import 'font-awesome/css/font-awesome.css'
import { Form, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import { createArticle } from '../../apis'
const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 }
}

interface AppProps extends FormComponentProps {}

interface AppState {
  content: ReactMdeValue
}

class WriteArticle extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      content: { text: '' }
    }
  }

  handleContentChange = (value: ReactMdeValue) => {
    this.setState({ content: value })
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    // console.log(this.props)
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        // console.log(values)
        createArticle(values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          colon={false}
          {...formItemLayout} 
          label="文章标题"
        >
          {getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入文章标题' }]
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          colon={false}
          {...formItemLayout} 
          label="文章标签"
        >
          {getFieldDecorator('tag', {
            rules: [{ required: true, message: '请输入文章标签' }]
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          colon={false}
          {...{ labelCol: { span: 2}, wrapperCol: { span: 18 } }}
          label="文章内容"
        >
          {getFieldDecorator('content', {
            rules: [{ required: true, message: '请输入文章内容'}]
          })(
            <div className="editor-container">
              <Editor
                textAreaProps={{
                  id: 'ta1',
                  name: 'ta1',
                }}
                value={this.state.content}
                onChange={this.handleContentChange}
                commands={ReactMdeCommands}
              />
            </div>
          )}
        </FormItem>
        <FormItem
          {...{ wrapperCol: { offset: 2 } }}
        >
          <Button type="primary" htmlType="submit">发布文章</Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedWriteArticle = Form.create()(WriteArticle)
export default WrappedWriteArticle