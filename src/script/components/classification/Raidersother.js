import React, {Component} from 'react'

import Raidersnav from './Raidersnav'

class Raidersother extends Component {
//	constructor(props){
//		super(props)
//		this.state={
//			data:[]
//		}
//	}

//getchannelslist(list) {
////	console.log(list)
//	return list.map((value,index)=>{
////		console.log(value)
//		{this.getchannelslist(this.state.data)}				
//	    return (
//	      	
//
//	    )
//	})
//}
  
  
  	render(){
		return (
			<div className="m-888">
				<Raidersnav />
				<div className="m-666">
					<div className="m-Raidersmore">
					    <img src='./img/liwu.png'/>
					    <img src='./img/jiaju.png'/>
					    <img src='./img/chuanda.png'/>
					    <img src='./img/meiwu.png'/>
					    <img src='./img/shipin.png'/>
					    <img src='./img/meishi.png'/>
				    </div>
				</div>
			</div>
		)
	}
//  componentDidMount(){
//		let a = this.props.uri
//		fetch(`json/${a}`)
//	      .then((response)=>response.json())
//	      .then((res)=>{
////	      console.log(res.data.channel_groups[0].channels) //ok
//			this.setState({
//				data:res.data.channel_groups[0].channels
//			})
//   	 })
//	}
}

export default Raidersother
