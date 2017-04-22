import React,{Component} from "react"

export default class Footer extends Component {
	render(){
		return (
			<div className="footer">
				<ul>
					<li>
						<a href="#javascript">
							<i className="yo-ico active">&#xebc2;</i>
							<span className="active">首页</span>
						</a>
					</li>
					<li>
						<a href="#javascript">
							<i className="yo-ico">&#xe602;</i>
							<span>榜单</span>
						</a>
					</li>
					<li>
						<a href="#javascript">
							<i className="yo-ico">&#xe600;</i>
							<span>分类</span>
						</a>
					</li>
					<li>
						<a href="#javascript">
							<i className="yo-ico">&#xe716;</i>
							<span>我的</span>
						</a>
					</li>
				</ul>
			</div>
		)
	}
}
