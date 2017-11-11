import React from 'react'
import './index.styl'

class Header extends React.Component {
	render() {
		return (
			<div className="header ant-layout-header">
				<div className="title">博客管理后台</div>
			</div>
		)
	}
}

export default Header