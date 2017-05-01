import React,{Component} from "react"

export default class DetailFooter extends Component {
	render(){
		return (
			<div className="detail_footer">
				<section>
					<i className="yo-ico">&#xe646;</i>
					<span>喜欢</span>
				</section>
				<section>
					<i className="yo-ico">&#x35e4;</i>
					<span>分享</span>
				</section>
				<div></div>
				<p>加入购物车</p>
				<h6>立即购买</h6>
			</div>
		)
	}
}
