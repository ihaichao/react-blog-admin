import React from 'react'
import { Layout } from 'antd'
import SideBar from '../../components/SideBar'
import 'antd/dist/antd.css'
import './index.styl'
const { Header, Content, Footer } = Layout

class App extends React.Component {
	render() {
		return (
			<Layout className="ant-layout-has-sider">
				<SideBar />
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }} />
					<Content style={{ margin: '24px 16px 0', paddingTop: '20px', backgroundColor: '#fff' }}>
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