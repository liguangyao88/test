import React, {Component} from 'react'

import {Link} from 'react-router'

class ListTop extends Component {
  render() {
    return (
      <div className="list_top">
          <div>
	          <Link to="/list/ListDay" activeClassName="active"><b>每日推荐</b></Link>
	          <Link to="/list/Top100" activeClassName="active"><b>Top100</b></Link>
	          <Link to="/list/ListOriginal" activeClassName="active"><b>独立原创榜</b></Link>
	        </div>
      </div>
    )
  }
}

export default ListTop