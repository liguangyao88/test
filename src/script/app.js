require('../style/app.scss')

//1.依赖react
import React from "react"
//2.依赖react-dom
import ReactDom from "react-dom"
//3.引入路由
import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'


import Index from "./components/home/Index"

import List from './components/list/List'

// 引入分类页
import Classification from "./components/classification/Classification" 

import Mine from './components/mine/Mine'

//console.log(Mine)

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Index}></Route>
    <Route path="/list" component={List}></Route>
    <Route path="/classification" component={Classification}></Route>
    <Route path="/mine" component={Mine}></Route>
  </Router>
), document.getElementById('root'))







