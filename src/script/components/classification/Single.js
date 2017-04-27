import React, {Component} from 'react'

import Singlelist from "./Singlelist"
import MultiList from '../../../component_dev/multilist/src'

export default class Single extends Component{
    render() {
        return (
        	<div className="m-Singlecontent">
        		<Singlelist />
        	</div>
            
        );
    }

}