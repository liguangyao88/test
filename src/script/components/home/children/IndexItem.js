import React,{Component} from "react"

import Loading, {loading} from '../../../../component_dev/loading/src'

export default class IndexItem extends Component {
	
	constructor(props){
		super(props)
		this.state={
			data:[]
		}
	}
	
	 componentWillMount() {
	    loading.show()
	  }
	
	getlist(list){
		return list.map((value,index)=>{
			return (
				// console.log(value.column.title)
				//这里也得包一层div
				<div className="index_item">
					<section>
						<div className="author_img">
							<img src={value.author.avatar_url}/>
						</div>
						<div className="author_xinxi">
							<h5>{value.author.nickname}</h5>
							<p>{value.author.introduction}</p>
						</div>
					</section>
					<div className="cover_img">
						<img src={value.cover_image_url}/>
					</div>
					<div className="author_title">{value.title}</div>
					<div className="author_msg">{value.share_msg}</div>
					<div className="author_baogao">
						<h4>栏目
							<span>{value.column.title}</span>
						</h4>
						<p>251</p>
					</div>
				</div>
			)
		})
	}
	
	
	render(){
//		console.log(this.state.data)
		return (
			<div>
				{this.getlist(this.state.data)}				
			</div>
		)
	}
	
	componentDidMount(){
		let a = this.props.uri
//		console.log(a)
		fetch(`json/${a}`)
	      .then((response)=>response.json())
	      .then((res)=>{
			this.setState({
				data:res.data.items
			})
			loading.hide()
     	 })
	}
}
