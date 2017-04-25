import React,{Component} from "react"

import IndexItem from "./IndexItem"

//引入yo框架的Scroller组件
import Scroller from "../../../../component_dev/scroller/src"

export default class IndexColleague extends Component {
	render(){
		return (
			<div className="index_middle">
				<Scroller extraClass="yo-scroller-a"
				 	scrollX={false}
    				scrollY={true}
    			>
				<section className="index_colleague">
					<IndexItem  uri="index5"/>
				</section>
				</Scroller>
			</div>
		)
	}
}
