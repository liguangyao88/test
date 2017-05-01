import React,{Component} from "react"

import SelfHeader from "./children/SelfHeader"
import SelfBanner from "./children/SelfBanner"
import SelfXinxi from "./children/SelfXinxi"
import SelfList from "./children/SelfList"

import Scroller from "../../../component_dev/scroller/src"

export default class Self extends Component {
	
	gotoDetail(id){
//		console.log(id)
//		console.log(this)
		this.props.router.push(`/detail/${id}`)
	}
	
	render(){
		return (
			<div className="m-self">
				<SelfHeader />
				<div className="self_middle">
					<Scroller extraClass="yo-scroller-b"
					 	scrollX={false}
	    				scrollY={true}
    				>
						<SelfBanner / >
						<SelfXinxi />
						<SelfList onGotoDetail={this.gotoDetail.bind(this)}/>
					</Scroller>
				</div>
			</div>
		)
	}
}
