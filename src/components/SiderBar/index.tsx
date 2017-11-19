import React from 'react'
import { Link } from 'react-router'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout
const { SubMenu } = Menu
import './index.styl'

class SiderBar extends React.Component {
	render() {
		return (
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
			>
				<div className="title">博客管理后台</div>
				<Menu 
					theme="dark" 
					mode="inline" 
					defaultSelectedKeys={['4']}
				>
					<SubMenu key="sub1" title={<span><Icon type="file-text" />文章管理</span>}>
						<Menu.Item key="1">
							<Link to="/article/list">文章列表</Link>
						</Menu.Item>
						<Menu.Item key="2">
							<Link to="/article/write">撰写文章</Link>
						</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
		)
	}
}

export default SiderBar