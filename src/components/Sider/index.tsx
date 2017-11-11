import React from 'react'
import { Menu, Icon } from 'antd'
const { SubMenu } = Menu
import './index.styl'

class Sider extends React.Component {
	render() {
		return (
			<div className="sider">
				<Menu
					mode="inline"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					style={{ height: '100%', borderRight: 0 }}
				>
					<SubMenu key="sub1" title={<span><Icon type="file-text" />文章管理</span>}>
						<Menu.Item key="1">文章列表</Menu.Item>
						<Menu.Item key="2">发布文章</Menu.Item>
					</SubMenu>
				</Menu>
			</div>
		)
	}
}

export default Sider