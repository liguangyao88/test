import React, {Component} from 'react'
import {browserHistory} from 'react-router'

import Scroller from '../../../../component_dev/scroller/src'

import Loading, {loading} from '../../../../component_dev/loading/src'

export default class Top100 extends Component {
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
			            <p>￥<i>{value.price}</i></p>
			          </dd>
				     </dl>
				)			
		})
	}



  render() {
			return (
    
		    	<div className="list_bgBox">
		    	<Scroller extraClass={'yo-scroller-a'} scrollX={false} scrollY={true}
			    	ref="scroller"
		            	usePullRefresh={true}
		            	onRefresh={()=>{
			              fetch("/api/v2/ranks_v3/ranks/2?limit=100&offset=0")
			                .then((response)=>response.json())
					     .then((res)=>{
							this.setState({
								data: this.state.data.concat (res.data.items)
							})
			                 this.refs.scroller.stopRefreshing(true);
	
			                })
			            }}	            	
		    	
		    	>
		    	  <div className="list_banner">
			           <img src="http://img01.liwushuo.com/image/160909/uzptw7wlm.png-w720" alt=""/>
			      </div>
			    	<div className="list_box">
					    	
				      <div className="list_con">
				           {this.getlistdata(this.state.data)}				        		      
				      </div>
			      </div>
			      </Scroller>
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
		loading.hide()
     })
 }
 
}