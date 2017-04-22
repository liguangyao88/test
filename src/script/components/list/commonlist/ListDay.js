import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import ListBanner from './ListBanner'
class ListDay extends Component {
   render() {
    return (
    	<div className="list_bgBox">
    	   <ListBanner/>
	    	<div className="list_box">
			    	
		      <div className="list_con">
		           <dl>
				          <dt><img src="http://img03.liwushuo.com/image/161114/77wxjxdno_w.jpg-w720" alt=""/></dt>
				          <dd>
				            <h1>超人气耳钉礼盒</h1>
				            <b>诗与岛屿·幸运-A925纯银耳钉礼盒</b>
				            <p>$ <i>88</i></p>
				          </dd>
		        </dl>
		        		      
		      </div>
	      </div>
      </div>
    )
  }
}

export default ListDay