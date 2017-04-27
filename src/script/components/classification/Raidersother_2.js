import React, {Component} from 'react'

import Raidersnav from './Raidersnav'

class Raidersother_2 extends Component {
	constructor(props){
		super(props)
		this.state={
			data:[]
		}
	}
  	render(){
		return (
			<div className="m-888">
				<Raidersnav />
				<div className="m-666">
					<div className="m-Raidersmore">
					    <img src='./img/songnvpiao.png'/>
					    <img src='./img/songnanpiao.png'/>
					    <img src='./img/songtongshi.png'/>
					    <img src='./img/songjiyou.png'/>
					    <img src='./img/songguimi.png'/>
					    <img src='./img/songtongshi.png'/>
				    </div>
				</div>
			</div>
		)
	}
}

export default Raidersother_2
