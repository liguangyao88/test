import React,{Component} from "react"

import {Link} from "react-router"

export default class IndexHeader extends Component {
	render(){
		return (
			<div className="index_header">
				<p>礼物说</p>
				<span>
					<Link to="/search">
						<b className="yo-ico">&#xf00a8;</b>
						<em>选份走心好礼送给Ta</em>
					</Link>
				</span>
				<i className="yo-ico">&#xe670;</i>
			</div>
		)
	}
}
