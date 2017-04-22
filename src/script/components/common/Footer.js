import React,{Component} from "react"
//引入react-router中的Link组件
import {Link} from "react-router"

export default class Footer extends Component {
	render(){
		return (
			<div className="footer">
				<ul>
					<li>
						<Link to="/" activeClassName="active">
							<i className="yo-ico">&#xebc2;</i>
							<span>首页</span>
						</Link>
					</li>
					<li>
						<Link to="/list" activeClassName="active">
							<i className="yo-ico">&#xe602;</i>
							<span>榜单</span>
						</Link>
					</li>
					<li>
						<a href="#javascript">
							<i className="yo-ico">&#xe600;</i>
							<span>分类</span>
						</a>
					</li>
					<li>
						<Link to="/mine" activeClassName="active">
							<i className="yo-ico">&#xe716;</i>
							<span>我的</span>
						</Link>
					</li>
				</ul>
			</div>
		)
	}
}
