import React, {Component} from 'react'

import Raidersnav from './Raidersnav'

class Raiderscolumn extends Component {
  render() {
    return (
      <div className="m-Raiderscolumn">
      	<Raidersnav />
      	<div className="m-RaiderscolumnList">
	      	<div>
						<div>
						  <img src="./img/p1.jpg" />
						  <div>
						  	<span>明天穿什么</span>
						  	<span>穿衣大队长</span>
						  </div>
						</div>
						<span className="clSpan">点击查看全部</span>
					</div>
      	</div>
      </div>
    )
  }
  componentDidMount() {
    fetch(this.props.uri)
      .then((response)=>response.json())
      .then((res)=>{
        this.setState({
          dataSource: res.subjects
        })
      })
  }
}

export default Raiderscolumn
