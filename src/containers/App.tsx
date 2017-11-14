import React from 'react'
import { Layout } from 'antd'
// import Header from '../components/Header'
// import Sider from '../components/Sider'
// import Content from '../components/Content'
import SiderBar from '../components/SiderBar'
import 'antd/dist/antd.css'
import './App.styl'
const { Header, Content, Footer } = Layout

class App extends React.Component {
	render() {
		return (
			<Layout className="ant-layout-has-sider">
				<SiderBar />
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }} />
					<Content style={{ margin: '24px 16px 0', backgroundColor: '#fff' }}>
						{this.props.children}
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						React-Blog-Admin ©2017 Created by Haichao
      		</Footer>
				</Layout>
			</Layout>
		)
	}
}

export default App