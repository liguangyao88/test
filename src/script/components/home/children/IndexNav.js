import React,{Component} from "react"

import {Link} from "react-router"

export default class IndexNav extends Component {
	render(){
		return (
			<div className="index_nav">
				<ul>
					<li>
						<Link to="middle" activeClassName="teshu">精选</Link>
					</li>
					<li>
						<Link to="girl" activeClassName="teshu">送女友</Link>
					</li>
					<li>
						<Link to="boy" activeClassName="teshu">送基友</Link>
					</li>
					<li>
						<Link to="colleague" activeClassName="teshu">送同事</Link>
					</li>
					<li>
						<Link to="elder" activeClassName="teshu">送长辈</Link>
					</li>
				</ul>
			</div>
		)
	}
}
