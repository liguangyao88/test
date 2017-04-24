import React, {Component} from 'react'

class Classificationheader extends Component {
  render() {
    return (
      <div className="m-classificationheader">
        <ul>
        	<li>
        		<div>
        			<span className="active">攻略</span>
        			<span>单品</span>
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

export default Classificationheader
