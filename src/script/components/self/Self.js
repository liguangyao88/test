import React,{Component} from "react"

import SelfHeader from "./children/SelfHeader"
import SelfBanner from "./children/SelfBanner"
import SelfXinxi from "./children/SelfXinxi"

export default class Self extends Component {
	render(){
		return (
			<div className="m-self">
				<SelfHeader />
				<div className="self_middle">
					<SelfBanner / >
					<SelfXinxi />
				</div>
			</div>
		)
	}
}
