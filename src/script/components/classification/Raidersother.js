import React, {Component} from 'react'
import Loading, {loading} from '../../../component_dev/loading/src'

//import Raidersnav from './Raidersnav'

class Raidersother extends Component {
	constructor(props){
		super(props)
		this.state={
			data:[],
      title: ''
		}
	}

getMovieList(list) {
    return list.map((value, index)=>{
      return (
      	<div className="m-Raidersmore">
			<img src={value.cover_image_url}/>
		</div>
      )
    })
}

//gettitle(nav){
//	console.log(nav)
//  return nav.map((value, index)=>{
//    return (
//    	<div><span>栏目</span></div>
//    )
//  }
//}

	componentWillMount() {
	   loading.show()
	}
  
  render(){
		return (
			<div className="m-888">
				<div className="m-Raidersnav">
			      	<div><span>栏目</span></div>
			      	<div><span>查看全部</span><em></em></div>
			    </div>
				<div className="m-666">
        			{this.getMovieList(this.state.data)}
				</div>
			</div>
		)
	}


  componentDidMount(){
		let a = this.props.uri
//		console.log(a)
		fetch(`json/${a}`)
//		fetch(`/api/v2/ranks_v3/ranks/3?limit=6`)
	      .then((response)=>response.json())
	      .then((res)=>{
//	      	console.log(res.data.channel_groups) //ok
				this.setState({
					data:res.data.channel_groups[0].channels,
	     	 	title: res.data.channel_group
	
				})
				loading.hide()
	    })
	}
}

export default Raidersother
