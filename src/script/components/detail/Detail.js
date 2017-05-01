import React,{Component} from "react"

import DetailHeader from "./children/DetailHeader"

import DetailFooter from "./children/DetailFooter"

import Scroller from "../../../component_dev/scroller/src"

export default class Detail extends Component {
	
	constructor(props) {
	    super(props)
	    this.state = {
			data:[]
	    }
	}
	
	detailList(list){
		console.log(list)
	}
	
	
	render(){
//		console.log(this.props.params.id)
//		var a = this.state.data.detail_html
//		console.log(a)
//		var reg=/<div [^>/]*?class="wrapper" [^>/]*>(.*?)<\/div>/gi
//		var reg = /\<div[^\>]+\>[\r\n.]*\<\/div\>/gi
//		console.log(reg.exec(a))
		console.log(this.state.data)
		return (
			<div className="m-detail">
				<DetailHeader/>
				<div className="detail_middle">
					<section className="detail_img">
						<img src={this.state.data.cover_image_url} />
					</section>
					<div className="detail_xinxi">
						<h1>{this.state.data.short_description}</h1>
						<p>{this.state.data.title}</p>
					</div>
				</div>
				<DetailFooter/>
			</div>
		)				
	}
	
	 componentDidMount() {
	    fetch(`/api/v2/shop/items/${this.props.params.id}`)
	      .then((response)=>response.json())
	      .then((res)=>{
//	      	console.log(res.data.item)
	        this.setState({
	        	data:res.data.item
	        })
	      })
	  }
}
