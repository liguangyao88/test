import React,{Component} from "react"

import IndexBanner from "./IndexBanner"

import IndexShow from "./IndexShow"

import IndexList from "./IndexList"

//引入yo框架的list组件
import ListYo from "../../../../component_dev/list/src"
//引入yo框架的Scroller组件
import Scroller from "../../../../component_dev/scroller/src"

//console.log(Scroller)

export default class IndexMiddle extends Component {
	render(){
		return (
			<div className="index_middle">
				<Scroller extraClass="yo-scroller-a"
				 	scrollX={false}
    				scrollY={true}
    			>
				<IndexBanner/>
				<IndexShow />
				<IndexList />
				</Scroller>
			</div>
		)
	}
}
