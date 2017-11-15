import React from 'react'
// import ReactMde, { ReactMdeCommands } from 'react-mde'
const ReactMde = require('react-mde')
const { ReactMdeCommands } = require('react-mde') 

interface ComponentProps {

}

interface ComponentState {
	reactMdeValue: object
}

class WriteArticle extends React.Component<ComponentProps, ComponentState> {
	constructor(props: object) {
		super(props)
		this.state = {
			reactMdeValue: {
				text: '',
				selection: null
			}
		}
	}

	handleValueChange = (value: object) => {
		this.setState({reactMdeValue: value})
	}

	render() {
		return (
			<div className="container">
				<ReactMde
					textAreaProps={{
							id: 'ta1',
							name: 'ta1',
					}}
					value={this.state.reactMdeValue}
					onChange={this.handleValueChange}
					commands={ReactMdeCommands}
				/>
			</div>
		)
	}
}

export default WriteArticle