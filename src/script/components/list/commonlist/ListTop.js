import React, {Component} from 'react'

import {Link} from 'react-router'

class ListTop extends Component {
  render() {
    return (
      <div className="list_top">
          <div>
	          <Link to="/ListDay" activeClassName="active">每日推荐</Link>
	          <Link to="./commonlist/Top100" activeClassName="active">Top100</Link>
	          <Link to="./commonlist/ListOriginal" activeClassName="active">独立原创榜</Link>
	        </div>
      </div>
    )
  }
}

export default ListTop