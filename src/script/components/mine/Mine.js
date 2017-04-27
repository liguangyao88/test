import React,{Component} from "react"

import MineLogin from "./children/MineLogin"

//import Footer from "../common/Footer"

export default class Mine extends Component {
	render(){
		return (
			<div className="m-mine">
				{this.props.children}				
			</div>
		)
	}
}
