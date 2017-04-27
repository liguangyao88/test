import React, {Component} from 'react'

import MultiList from '../../../component_dev/multilist/src'
import Scroller from '../../../component_dev/scroller/src'


export default class Singlelist extends Component{
    render() {
        return (
			<div className="m-Singlelist">
			   <ul>
			   	<li className="active"><i></i><span>热门分类</span></li>
			   	<li><i></i><span>个性配饰</span></li>
			   	<li><i></i><span>温暖家具</span></li>
			   	<li><i></i><span>美味厨房</span></li>
			   	<li><i></i><span>美味礼物</span></li>
			   	<li><i></i><span>数码小物</span></li>
			   	<li><i></i><span>创意文具</span></li>
			   	<li><i></i><span>美容护肤</span></li>
			   	<li><i></i><span>精致彩妆</span></li>
			   	<li><i></i><span>运动户外</span></li>
			   	<li><i></i><span>身体保健</span></li>
			   	<li><i></i><span>女装</span></li>
			   	<li><i></i><span>鞋包</span></li>
			   	<li><i></i><span>女鞋</span></li>
			   	<li><i></i><span>男装</span></li>
			   	<li><i></i><span>男鞋</span></li>
			   	<li><i></i><span>母婴</span></li>
			   </ul>
			   
			</div>
        );
    }

}
