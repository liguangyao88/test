import React,{Component} from "react"

import {hashHistory} from 'react-router'

export default class SelfHeader extends Component {
	
	goback(){
		hashHistory.push("/")
	}
	
	render(){
		return (
			<div className="self_header">
				<i className="yo-ico" onClick={this.goback}>&#xf07d;</i>
				<span>专题</span>
				<i className="yo-ico">&#xf07e;</i>
			</div>
		)
	}
}
