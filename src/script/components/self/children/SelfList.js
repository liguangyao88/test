import React,{Component} from "react"

import Loading, {loading} from '../../../../component_dev/loading/src'

import {Link} from "react-router"

import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'

export default class SelfList extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			data:[]
		}
	}
	
	componentWillMount(){
		loading.show()
	}
	
	gotoDetail(id){
//		console.log(id)//ok
//		console.log(this)
		this.props.onGotoDetail(id)
	}
	
	
	
	getSelfList(list){
//		console.log(list)
		return list.map((value,index)=>{
//			console.log(value.id)//ok
//			console.log(this)
			return (
				<li onClick={this.gotoDetail.bind(this,value.id)}>
					<a>
						<section>
							<img src={value.cover_image_url}/>
						</section>
						<div className="self_msg">															
							<h2>{value.short_description}</h2>
							<p>{value.title}</p>
							<h5>￥&nbsp;<span>{value.skus[0].price}</span></h5>
						</div>
					</a>
				</li>
			)
		})
	}
	
	
	
	render(){
		return (
			<div className="self_list">
				<ul>
					{this.getSelfList(this.state.data)}								
				</ul>
			</div>
		)
	}
	
	componentDidMount(){

		fetch(`api/v2/shopitem_collections/125?limit=20&offset=0`)
	      .then((response)=>response.json())
	      .then((res)=>{
//				console.log(res)
				this.setState({
					data:res.data.items
     	 })
     	 	loading.hide()
     	 })
	}
}
