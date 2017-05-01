import React,{Component} from "react"

import {hashHistory} from 'react-router'

export default class DetailHeader extends Component {
	
	goback(){
		hashHistory.push("/self")
	}
	
	render(){
		return (
			<div className="detail_header">
				<i className="yo-ico" onClick={this.goback}>&#xf07d;</i>
				<i className="yo-ico">
				&#xe600;
					<span>0</span>
				</i>
			</div>
		)
	}
}
