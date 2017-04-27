import React, {Component} from 'react'
//import {browserHistory} from 'react-router'

import Loading, {loading} from '../../../../component_dev/loading/src'

export default class ListImg extends Component {
   constructor(props) {
    super(props)
    this.state= {

			data:[]
    }
}
 componentWillMount() {
    loading.show()
  }	

	getlistdata(list){
		return list.map((value,index)=>{
			
				return (
					<dl>
			          <dt><img src={value.image_urls[0]} alt=""/></dt>
			          <dd>
			            <h1>{value.short_description}</h1>
			            <b>{value.name}</b>
			            <p>$ <i>{value.price}</i></p>
			          </dd>
				     </dl>
				)			
		})
	}



  render() {
			return (
    		    	
				      <div className="list_con">
				           {this.getlistdata(this.state.data)}				        		      
				      </div>

    )

}
  
   componentDidMount() {
   	fetch(this.props.uri)
//  fetch("/api/v2/ranks_v3/ranks/2?limit=100&offset=0")
      .then((response)=>response.json())
     .then((res)=>{
		this.setState({
			data:res.data.items
		})
		loading.hide()
     })
   }
 
}