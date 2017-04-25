import React, {Component} from 'react'

import {Link} from 'react-router'


class Raidersheader extends Component {
  render() {
    return (
      <div className="m-Raidersheader">
        <ul>
        	<li>
        		<div>
        			<span><Link to="/classification/raiders" activeClassName="active">攻略</Link></span>
        			<span><Link to="/classification/single" activeClassName="active">单品</Link></span>
        		</div>
        		<em></em>
        	</li>
        </ul>
        <div className="m-search">
					<input type="text" placeholder="选份走心好礼送给Ta"/>
        </div>
      </div>
    )
  }
}

export default Raidersheader
