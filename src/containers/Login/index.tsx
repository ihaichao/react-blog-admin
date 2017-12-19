/// <reference path="../../typings/modules/particlesJS.d.ts" />

import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import 'particles.js'
import './index.styl'

const FormItem = Form.Item
const particlesJS = window.particlesJS

interface IProps extends FormComponentProps {}

class Login extends Component<IProps> {
	componentDidMount() {
		particlesJS('particles', 
		{
			particles: {
				number: {
					value: 20,
					density: {
						enable: !0,
						value_area: 1E3
					}
				},
				color: {
					value: '#e1e1e1'
				},
				shape: {
					type: 'circle',
					stroke: {
						width: 0,
						color: '#000000'
					},
					polygon: {
						nb_sides: 5
					},
					image: {
						src: 'img/github.svg',
						width: 100,
						height: 100
					}
				},
				opacity: {
					value: .5,
					random: !1,
					anim: {
						enable: !1,
						speed: 1,
						opacity_min: .1,
						sync: !1
					}
				},
				size: {
					value: 15,
					random: !0,
					anim: {
						enable: !1,
						speed: 180,
						size_min: .1,
						sync: !1
					}
				},
				line_linked: {
					enable: !0,
					distance: 650,
					color: '#cfcfcf',
					opacity: .26,
					width: 1
				},
				move: {
					enable: !0,
					speed: 2,
					direction: 'none',
					random: !0,
					straight: !1,
					out_mode: 'out',
					bounce: !1,
					attract: {
						enable: !1,
						rotateX: 600,
						rotateY: 1200
					}
				}
			},
			interactivity: {
				detect_on: 'canvas',
				events: {
					onhover: {
						enable: !1,
						mode: 'repulse'
					},
					onclick: {
						enable: !1,
						mode: 'push'
					},
					resize: !0
				},
				modes: {
					grab: {
						distance: 400,
						line_linked: {
							opacity: 1
						}
					},
					bubble: {
						distance: 400,
						size: 40,
						duration: 2,
						opacity: 8,
						speed: 3
					},
					repulse: {
						distance: 200,
						duration: .4
					},
					push: {
						particles_nb: 4
					},
					remove: {
						particles_nb: 2
					}
				}
			},
			retina_detect: !0
		})
	}

	handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

	render() {
		const { getFieldDecorator } = this.props.form
		return (
			<div className="login-wrapper">
				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem className="login-title">Blog Admin</FormItem>
					<FormItem>
						{getFieldDecorator('userName', {
							rules: [{ required: true, message: 'Please input your username!' }],
						})(
							<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please input your Password!' }],
						})(
							<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
						)}
					</FormItem>
					<FormItem>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Log in
						</Button>
					</FormItem>
				</Form>
				<div className="copyright">Copyright©2017 Created by Haichao</div>
				<div id="particles">
					<canvas 
						className="particles-js-canvas-el"
						style={{width: '100%', height: '100%'}}
					/>
				</div>
			</div>
		)
	}
}

const WrappedLogin = Form.create()(Login)
export default WrappedLogin