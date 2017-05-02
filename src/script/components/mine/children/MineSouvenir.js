import React,{Component} from "react"
import Footer from "../../common/Footer"
import {hashHistory} from 'react-router'
import {Link} from 'react-router'
export default class MineSouvenir extends Component {
	
	logout() {
    localStorage.removeItem('username')
    this.setState({
      username: localStorage.getItem('username')
    })
       hashHistory.push("/mine/MineLogin")
  }
	
	
	
	
		render(){
		return (
			
			<div className="mine_Souvenir">
			        <div className="Mine_User">
				        <div className="Sou_nav">
				               <i className="yo-ico" onClick={this.logout.bind(this)}>&#xe68c;</i>
				               <span className="nav_user">{localStorage.getItem('username')}</span>
				               <i className="yo-ico">&#xe65c;</i>
				               <i className="yo-ico">&#xe64b;</i>			               
				        </div>
				        <div className="user_information">
				               <span className="user_img"><i className="yo-ico">&#xe63a;</i></span>
				               <ul>
				                    <li>
				                         <h3>0</h3>
				                         <p>积分</p>
				                    </li>
				                         <span>|</span>  
				                    <li>
				                         <h3>0</h3>
				                         <p>关注</p>
				                    </li>
				                     <span>|</span>    
				                    <li>
				                         <h3>0</h3>
				                         <p>新消息</p>
				                    </li>			                    
				               </ul>
				        </div>
				        <div className="user_privilege">
				                <ul>
				                    <li>
				                         <i className="yo-ico">&#xe602;</i>
				                         <p>购物车</p>
				                    </li>			                    
				                    <li>
				                         <i className="yo-ico">&#xe616;</i>
				                         <p>订单</p>
				                    </li>			          
				                    <li>
				                         <i className="yo-ico">&#xe61b;</i>
				                         <p>礼券</p>
				                    </li>
				                    <li>
				                         <i className="yo-ico">&#xe610;</i>
				                         <p>送礼提醒</p>
				                    </li>	
				               </ul>		               
				        </div>
			        </div>
			        <div className="mine_love">
			           <div className="love_xz">
			               <Link to="/MineSouvenir" activeClassName="active">单品</Link>
	                       <Link to="/MineSouvenir/mineGlue" activeClassName="active">攻略</Link>	                       
			           </div>
			           {this.props.children}
			           
			        </div>
			        			        
			       <Footer />
			</div>
			
		)
	}

}