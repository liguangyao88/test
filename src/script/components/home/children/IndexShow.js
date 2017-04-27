import React,{Component} from "react"

import {Link} from "react-router"

export default class IndexShow extends Component {
	render(){
		return (
			<div className="index_show">
				<section>
					<Link to="#javascript">
						<span>
							<i className="yo-ico">&#xe604;</i>
						</span>
						<p>百元礼物</p>
					</Link>
				</section>
				<section>
					<Link to="#javascript">
						<span>
							<i className="yo-ico">&#xe630;</i>
						</span>
						<p>创意礼物</p>
					</Link>
				</section>
				<section>
					<Link to="#javascript">
						<span>
							<i className="yo-ico">&#xe632;</i>
						</span>
						<p>最新Get</p>
					</Link>
				</section>
				<section>
					<Link to="#javascript">
						<span>
							<i className="yo-ico">&#xf00a8;</i>
						</span>
						<p>美味礼物</p>
					</Link>
				</section>
				<section>
					<Link to="#javascript">
						<span>
							<i className="yo-ico">&#xe602;</i>
						</span>
						<p>一周精选</p>
					</Link>
				</section>
				<section>
					<Link to="/self">
						<span>
							<i className="yo-ico">&#xe656;</i>
						</span>
						<p>自营专区</p>
					</Link>
				</section>
			</div>
		)
	}
}
