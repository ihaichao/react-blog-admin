import React from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout
const { SubMenu } = Menu

class SiderBar extends React.Component {
	render() {
		return (
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
			>
				<div className="logo" />
				<Menu 
					theme="dark" 
					mode="inline" 
					defaultSelectedKeys={['4']}
				>
					<SubMenu key="sub1" title={<span><Icon type="file-text" />文章管理</span>}>
						<Menu.Item key="1">文章列表</Menu.Item>
						<Menu.Item key="2">发布文章</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
		)
	}
}

export default SiderBar