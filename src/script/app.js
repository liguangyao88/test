require('../style/app.scss')

//1.依赖react
import React from "react"
//2.依赖react-dom
import ReactDom from "react-dom"
//3.引入路由
import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'


import Index from "./components/home/Index"

import List from './components/list/List'


// 引入分类页开始
import Classification from "./components/classification/Classification" 
import Raiders from "./components/classification/Raiders"
import Single from "./components/classification/Single"
// 引入分类页结束


import Mine from './components/mine/Mine'

import MineSouvenir from './components/mine/children/MineSouvenir'

import MineRegister from './components/mine/children/MineRegister'

import MineLogin from './components/mine/children/MineLogin'

//主页上面的5个子路由开始
import IndexMiddle from "./components/home/children/IndexMiddle"

import IndexGirl from "./components/home/children/IndexGirl"

import IndexBoy from "./components/home/children/IndexBoy"

import IndexColleague from "./components/home/children/IndexColleague"

import IndexElder from "./components/home/children/IndexElder"

//主页上面的5个子路由结束

//console.log(IndexBoy)//ok

//引入榜单页开始
import Top100 from "./components/list/commonlist/Top100"

import ListOriginal from './components/list/commonlist/ListOriginal'

import ListDay from './components/list/commonlist/ListDay'

//引入榜单页结束




//console.log(Top100)

import Search from "./components/search/Search"
//console.log(Search)

import Self from "./components/self/Self"

import Detail from "./components/detail/Detail"

//console.log(Detail)

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
    		<IndexRedirect to="/middle" />
    		<Route path="middle" component={IndexMiddle} />
    		<Route path="girl" component={IndexGirl} />
    		<Route path="boy" component={IndexBoy} />
    		<Route path="colleague" component={IndexColleague} />
    		<Route path="elder" component={IndexElder} />
    </Route>   
    <Route path="/list" component={List}>
    		<IndexRedirect to="/list/ListDay" />
         <Route path="/list/ListDay" component={ListDay}></Route>
         <Route path="/list/Top100" component={Top100}></Route>    
         <Route path="/list/ListOriginal" component={ListOriginal}></Route>
    </Route>
    <Route path="/classification" component={Classification}>
    	<IndexRedirect to="/classification/raiders" />
      <Route path="/classification/raiders" component={Raiders} />
      <Route path="/classification/single" component={Single} />
    	</Route>
    <Route path="/search" component={Search}></Route>
    <Route path="/self" component={Self}></Route>
    <Route path="/detail/:id" component={Detail}></Route>
    <Route path="/mine" component={Mine}>
    			<IndexRedirect to="/mine/MineLogin" />
    			<Route path="/mine/MineLogin" component={MineLogin}></Route>
         <Route path="/mine/MineRegister" component={MineRegister}></Route>
    </Route>
    <Route path="/MineSouvenir" component={MineSouvenir}></Route>
  </Router>
), document.getElementById('root'))













