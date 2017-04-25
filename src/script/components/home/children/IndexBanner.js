import React,{Component} from "react"

//会主动找index.js
import Carousel from "../../../../component_dev/carousel/src"

//console.log(Carousel)//ok
export default class IndexBanner extends Component {
	render(){
		return (
			
			<Carousel extraClass="yo-carousel-a">
			    <li className="item">
			    	<img className="img" src="http://img01.liwushuo.com/image/170419/q3zaypjq5.jpg-w720" />
			    </li>
			    <li className="item">
			    	<img className="img" src="http://img02.liwushuo.com/image/170419/ou9wx47kd.jpg-w720" />
			    </li>
			    <li className="item">
			    	<img className="img" src="http://img03.liwushuo.com/image/170417/1zzboo2z3.jpg-w720" />
			    </li>
			    <li className="item">
			    	<img className="img" src="http://img02.liwushuo.com/image/170417/ihz9cx2qd.jpg-w720" />
			    </li>
		</Carousel>

		)
	}
}
