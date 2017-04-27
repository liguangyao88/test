import React, {Component} from 'react'

import Raidersnav from './Raidersnav'

class Raidersother_1 extends Component {
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
					    <img src='./img/chuangyishenghuo.png'/>
					    <img src='./img/mengmengda.png'/>
					    <img src='./img/wenyifeng.png'/>
					    <img src='./img/kejifan.png'/>
					    <img src='./img/qipagaoguai.png'/>
					    <img src='./img/shejigan.png'/>
				    </div>
				</div>
			</div>
		)
	}
}

export default Raidersother_1
