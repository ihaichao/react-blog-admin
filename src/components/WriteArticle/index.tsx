import React from 'react'
import Editor, { ReactMdeCommands, ReactMdeValue } from 'react-mde'
import './index.styl'
import 'react-mde/lib/styles/css/react-mde.css'
import 'react-mde/lib/styles/css/react-mde-command-styles.css'
import 'react-mde/lib/styles/css/markdown-default-theme.css'
import 'font-awesome/css/font-awesome.css'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item

interface AppProps {
}

interface AppState {
  content: ReactMdeValue
}

class WriteArticle extends React.Component<AppProps, AppState> {
  constructor(props: object) {
    super(props)
    this.state = {
      content: { text: '' },
    }
  }

  handleContentChange = (value: ReactMdeValue) => {
    this.setState({ content: value })
  }

  render() {
    return (
      <Form>
        <FormItem
          label="文章标题"
        >
          <Input />
        </FormItem>
        <FormItem
          label="文章内容"
        >
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
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">发布文章</Button>
        </FormItem>
      </Form>
    )
  }
}

export default WriteArticle