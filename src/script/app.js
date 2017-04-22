require('../style/app.scss')

//1.依赖react
import React from "react"
//2.依赖react-dom
import ReactDom from "react-dom"

import Index from "./components/home/Index"

ReactDom.render(
	<Index/>,
	document.getElementById("root")
)




