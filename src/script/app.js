require('../style/app.scss')

//1.依赖react
import React from "react"
//2.依赖react-dom
import ReactDom from "react-dom"
//3.引入路由
import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'


import Index from "./components/home/Index"

import List from './components/list/List'

<<<<<<< HEAD
// 引入分类页
import Classification from "./components/classification/Classification" 

import Mine from './components/mine/Mine'

//主页上面的5个子路由开始
import IndexMiddle from "./components/home/children/IndexMiddle"

import IndexGirl from "./components/home/children/IndexGirl"

import IndexBoy from "./components/home/children/IndexBoy"

import IndexColleague from "./components/home/children/IndexColleague"

import IndexElder from "./components/home/children/IndexElder"

//主页上面的5个子路由结束

//console.log(IndexBoy)//ok
=======
import Mine from './components/mine/Mine'

import Top100 from "./components/list/commonlist/Top100"

import ListOriginal from './components/list/commonlist/ListOriginal'

import ListDay from './components/list/commonlist/ListDay'

console.log(Top100)

>>>>>>> gao


ReactDOM.render((
  <Router history={hashHistory}>
<<<<<<< HEAD
    <Route path="/" component={Index}>
    		<IndexRedirect to="/middle" />
    		<Route path="middle" component={IndexMiddle} />
    		<Route path="girl" component={IndexGirl} />
    		<Route path="boy" component={IndexBoy} />
    		<Route path="colleague" component={IndexColleague} />
    		<Route path="elder" component={IndexElder} />
    </Route>
    <Route path="/list" component={List}></Route>
    <Route path="/classification" component={Classification}></Route>
=======
    <Route path="/" component={Index}></Route>
    
    <Route path="/list" component={List}>
    <IndexRedirect to="/list/ListDay" />
         <Route path="/list/ListDay" component={ListDay}></Route>
         <Route path="/list/Top100" component={Top100}></Route>    
         <Route path="/list/ListOriginal" component={ListOriginal}></Route>
    </Route>
>>>>>>> gao
    <Route path="/mine" component={Mine}></Route>
  </Router>
), document.getElementById('root'))




<<<<<<< HEAD
=======





>>>>>>> gao



