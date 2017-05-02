import React, {Component} from 'react'

import MultiList from '../../../component_dev/multilist/src'
import Scroller from '../../../component_dev/scroller/src'


export default class Singlelist extends Component{

//  constructor(props) {
//      super(props);
//      this.state = {
//          multiValue: [],
//          dataSource: originalData 
//      };
//  }

//  handleValueChange({newValue}) {
//      let value;
//      // 最后一项选中项value值为0,则清空value,0通常是不限。
//      if (newValue[newValue.length - 1] === DEFAULT) {
//          value = [];
//      } else {
//          value = newValue;
//      }
//      this.setState({
//          multiValue: value
//      });
//  }

//  async handleUpdateData(item){
//      switch (item.asyncType){
//          case 'SUBWAY-2':
//              originalData.subList[5].subList[1].subList = await fetchDataOfSubway();
//              this.setState({
//                  dataSource: Object.assign({}, originalData)
//              });
//          break;
//      }
//  }

//  render() {
//      return (
//          <div title="multiList Demo" extraClass="demo-content">
//               <MultiList
//                  dataSource={this.state.dataSource}
//                  value={this.state.multiValue}
//                  onChange={this.handleValueChange.bind(this)}
//                  onUpdateData={this.handleUpdateData.bind(this)}
//              />
//          </div>
//      );
//  }

//const dataSource = {
//  defaultValue: 1,
//  subItemType: 'MENU',
//  subList: [{
//      name: '同步',
//      value: 1,
//      defaultValue: '1-1',
//      subItemType: 'RADIO',
//      subList: [{
//      name: '1-1  默认选项',
//          value: '1-1'
//      }, {
//          name: '1-2',
//          value: '1-2'
//      }, {
//          name: '1-3',
//          value: '1-3'
//      }, {
//          name: '1-4',
//          value: '1-4'
//      }]
//  }, {
//      name: '异步',
//      value: 2,
//      subItemType: 'RADIO',
//      defaultValue: '2-2',
//      subList: 'ASYNC',
//      asyncType: '2-2'
//  }]
//};





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

			   <div className="m-Singlelist_r">
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   	<dl>
			   		<dt><img src="/img/urgs9vy8a.png" /></dt>
			   		<dd>智能设备</dd>
			   	</dl>
			   </div>
			</div>
        );
    }



//  constructor(props) {
//      super(props);
//      this.state = {
//          dataSource: multiData,
//          value: [1]
//      }
//  }
//  updateValue(value) {
//      this.setState({
//          value,
//      })
//  }
//  render() {
//      return (
//          <div
//              title="multiList Demo"
//              extraClass="demo-content"
//          >
//              <MultiList
//                  dataSource={ this.state.dataSource}
//                  value={this.state.value}
//                  onChange={({newValue}) => {
//                      this.updateValue(newValue);
//                  }}
//                  onItemTap={({item})=>{
//                      return [item.value];
//                  }}
//                  renderItem={({itemType, data, isSpread, index})=>{
//                      switch (itemType){
//                          case 'ProductMenu':
//                              return <ProductMenu data={data} isSpread={isSpread} index={index}/>
//                      }
//                  }}
//                  renderContent={({type}) => {
//                      switch (type){
//                          case 'product1':
//                              return <Product tit="product1" />;
//                          case 'product2':
//                              return <Product tit="product2" />;
//                      }
//                  }}
//              />
//          </div>
//      )
//  }
}

//const multiData = {
//  subItemType: 'ProductMenu',
//  subList: [{
//      name: '产品1',
//      value: 1,
//      subList: 'product1'
//  },{
//      name: '产品2',
//      value: 2,
//      subList: 'product2',
//  }]
//};