import React,{Component} from "react"

export default class MineLogin extends Component {
	render(){
		return (
			<div className="mine_login">
			          <div className="mine_head">11</div>
			          <h2>注册登录</h2>			          
			          <form>
			              <div>
			                    <i></i>
			              		<input type="text" name="user" placeholder="输入手机号"  className="user" />
			              </div>
			              <div>
			                     <i></i>
			                     <input type="password" name="pass" placeholder="输入密码"  className="pass"/>
			                     <b></b>
			                </div>
			               <input type="submit"  value="确定"/>
			          </form>
			          
			</div>
		)
	}
}
