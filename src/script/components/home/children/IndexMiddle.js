import React,{Component} from "react"

import IndexBanner from "./IndexBanner"

import IndexShow from "./IndexShow"

import IndexList from "./IndexList"

export default class IndexMiddle extends Component {
	render(){
		return (
			<div className="index_middle">
				<IndexBanner/>
				<IndexShow />
				<IndexList />
			</div>
		)
	}
}
