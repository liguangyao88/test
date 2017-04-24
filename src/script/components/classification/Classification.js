import React, {Component} from 'react'

import Classificationheader from './Classificationheader'
import Classificationcontent from './Classificationcontent'

export default class Classification extends Component{
	render(){

		return (
			<div className="m-Classification">
				<Classificationheader />
				<Classificationcontent />
			</div>
		);
	}
}


