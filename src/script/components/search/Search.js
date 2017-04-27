import React, {Component} from 'react'

import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'


//引入搜索组件
import Suggest from "../../../component_dev/suggest/src"

import List from '../../../component_dev/list/src'

import {Link} from "react-router"

//console.log(Suggest)//ok

export default class Search extends Component {
	constructor(props){
		super(props)
		this.state = {
			goodlist:[{}],
			condition:""
		}
	}
	
	  isEmptyObject(e) {
	    var t;
	    for (t in e)
	        return !1;
	    return !0
	  }
	
  render() {
//	console.log(this.state.goodlist)
    return (
        <div className="m-search">
        	<div>456</div>
        		<Suggest 
        			ref="suggest"
					placeholder={"选份走心好礼送给Ta"}
					showCancelButton={true}
					onCancelButtonTap={()=>{
//							<Link to="/"></Link>
//							console.log(hashHistory)
							hashHistory.push("/")
//							console.log(1)
//								this.props.router.goback()
								
						}}
					

					
					throttleGap={2000}
					onConditionChange={condition => {
//				        this.setState({ results });
//									console.log(condition)//可以拿到输入的值，但是是频繁触发的数值
						fetch(`/api/v2/search/item_v2?sort=&limit=20&offset=0&keyword=${condition}`)
						.then((response)=>response.json())
						.then((res)=>{							
							if(res.message == "bad_request"){
									console.log(9)
								}else{
										if(res.data.items.length>0){
											this.setState({
												goodlist:res.data.items,
												condition:condition
											})
										}
										
								}																											
						})
				    }}
							
			renderResult={results=>{
				 return (
              <List
                ref="list"
                extraClass="list_search"

                dataSource={this.state.goodlist}
                renderItem={(value,i)=>{
                  if (!this.isEmptyObject(value)) {
                    return (
	                      <section className="search_section">
					          <div className="search_img"><img src={value.cover_image_url} alt=""/></div>
					          <div className="search_description">
						            <h1>{value.short_description}</h1>
						            <h5>{value.name}</h5>
						            <p>$ <i>{value.price}</i></p>
					          </div>
						   </section>
                    )
                  }
                }}
                
                 useLoadMore={true}
                onLoad={()=>{
//                console.log(this.state.condition);
                  fetch(`/api/v2/search/item_v2?sort=&limit=6&offset=0&keyword=${this.state.condition}`)
                    .then((response)=>response.json())
                    .then((res)=>{
//                  	console.log(res)
                      if (res.data.items.length > 0) {
                        this.setState({
                          goodlist: this.state.goodlist.concat(res.data.items)
                        })
                        console.log(this)
                        this.refs.suggest.refs.list.stopLoading(true);
                      } else {
                        this.refs.suggest.refs.list.resetLoadStatus(false);
                      }
                    })
                }}
  
              >
              </List>
            )
			}}																			
        		/>
        </div>
    )
  }
}

