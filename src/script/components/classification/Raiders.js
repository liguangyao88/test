import React, {Component} from 'react'

import Raiderscolumn from './Raiderscolumn'
import Raidersother from './Raidersother'

export default class Raiders extends Component{
	render(){
		return (
		  <div className="m-Raiderscontent">
	      	<div>
		      	<Raiderscolumn />
		      	<Raidersother />
		      	<Raidersother />
		      	<Raidersother />
	      	</div>
	      </div>
		);
	}
}