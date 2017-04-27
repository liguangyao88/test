import React, {Component} from 'react'

import Raiderscolumn from './Raiderscolumn'
import Raidersother from './Raidersother'
import Raidersother_1 from './Raidersother_1'
import Raidersother_2 from './Raidersother_2'


export default class Raiders extends Component{
	render(){
		return (
		  <div className="m-Raiderscontent">
	      	<div>
		      	<Raiderscolumn />
		      	<Raidersother uri="classification2" />
		      	<Raidersother_1 />
		      	<Raidersother_2 />
	      	</div>
	      </div>
		);
	}
}