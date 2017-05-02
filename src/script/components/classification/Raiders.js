import React, {Component} from 'react'
import Scroller from '../../../component_dev/scroller/src'

import Raiderscolumn from './Raiderscolumn'
import Raidersother from './Raidersother'
import Raidersother_1 from './Raidersother_1'
import Raidersother_2 from './Raidersother_2'


export default class Raiders extends Component{
//	constructor(props){
//		super(props)
//		this.state={
//			data:[]
//		}
//	}
//	  componentWillMount() {
//	    loading.show()
//	  }
	render(){
		return (
		  <div className="m-Raiderscontent">
	      	<div>
	      		<Raiderscolumn />
		      	<Raidersother uri="classification2" />
		      	<Raidersother_1 />
		      	<Raidersother_2 />
	      	</div>
	      </div>
		);

	}


//	  componentDidMount(){
//		let a = this.props.uri
//		fetch(`json/${a}`)
//	      .then((response)=>response.json())
//	      .then((res)=>{
//	      console.log(res.data) //ok
//			this.setState({
//				data:res.data
//			})
//			loading.hide()
//   	 })
//	}
}