import React, {Component} from 'react'

import Raidersheader from './Raidersheader'
import Footer from '../common/Footer'
import Raiders from './Raiders'

export default class Classification extends Component{
	render(){
		return (
			<div className="m-Raiders">
				<Raidersheader />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}
