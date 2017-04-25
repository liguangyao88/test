require('../style/app.scss')

//1.依赖react
import React from "react"
//2.依赖react-dom
import ReactDom from "react-dom"
//3.引入路由
import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'


import Index from "./components/home/Index"

import List from './components/list/List'

import Mine from './components/mine/Mine'

import Top100 from "./components/list/commonlist/Top100"

import ListOriginal from './components/list/commonlist/ListOriginal'

import ListDay from './components/list/commonlist/ListDay'

console.log(Top100)



ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}></Route>
    
    <Route path="/list" component={List}>
    <IndexRedirect to="/list/ListDay" />
         <Route path="/list/ListDay" component={ListDay}></Route>
         <Route path="/list/Top100" component={Top100}></Route>    
         <Route path="/list/ListOriginal" component={ListOriginal}></Route>
    </Route>
    <Route path="/mine" component={Mine}></Route>
  </Router>
), document.getElementById('root'))












