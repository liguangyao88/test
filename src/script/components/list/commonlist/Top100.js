import React, {Component} from 'react'
import {browserHistory} from 'react-router'


export default class Top100 extends Component {
 constructor(props) {
    super(props)
    this.state= {

			data:[]
    }
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

		    	<div className="list_bgBox">
		    	  <div className="list_banner">
			           <img src="http://img01.liwushuo.com/image/160909/uzptw7wlm.png-w720" alt=""/>
			      </div>
			    	<div className="list_box">
					    	
				      <div className="list_con">
				           {this.getlistdata(this.state.data)}				        		      
				      </div>
			      </div>
		      </div>

    )

}

 componentDidMount() {
    fetch("/api/v2/ranks_v3/ranks/2?limit=100&offset=0")
      .then((response)=>response.json())
     .then((res)=>{
		this.setState({
			data:res.data.items
		})
     	}
     )
 }
 
}