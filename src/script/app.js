require('../style/app.scss')

//1.依赖react
import React from "react"
//2.依赖react-dom
import ReactDom from "react-dom"

// 引入分类页
import Classification from "./components/classification/Classification" 

// console.log(Classification)

ReactDom.render(
	(<Classification />),document.getElementById("root")
)

