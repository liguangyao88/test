import React,{Component} from "react"

import IndexHeader from "./children/IndexHeader"

import IndexNav from "./children/IndexNav"

import IndexMiddle from "./children/IndexMiddle"

import Footer from "../common/Footer"



export default class Index extends Component {
	render(){
//		console.log(this)
		return (
			<div className="m-index">
				<IndexHeader />
				<IndexNav />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}


