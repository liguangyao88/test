import React,{Component} from "react"
import {Link} from 'react-router'
import Footer from "../../common/Footer"
import {hashHistory} from 'react-router'

export default class MineLogin extends Component {
	constructor(props) {
    super(props)
    this.state = {
      username: localStorage.getItem('username')
    }
  }
	
	  submit(opt) {
	   let username = opt.formData.username;
	   let password = opt.formData.password;
	
	    let headers = new Headers({
	      'Content-Type': 'application/x-www-form-urlencoded'
	  })
    fetch(opt.uri, {
      method: 'POST',
      headers: headers,
      body: `username=${username}&password=${password}`
    })
    .then(response=>response.json())
    .then(res=>{
      opt.callback(res)
    })
    .catch(e=>{
      console.log(e);
    })
  }
	  
  login() {
    this.submit({
      uri: '/nodejs/users/login',
      callback: (res)=>{
        if (res.users) {
          localStorage.setItem('username', res.users)
			hashHistory.push("/MineSouvenir")		
        } else{
        	alert("账号或密码不对")
        }
      },
      formData: {
        username: this.refs.username.value,
        password: this.refs.password.value
      }
    })
  }	
	
	
	
	
	
	
	
	
	
	
	render(){
		return (
			<div>
			<div className="mine_login">
			          <div className="mine_head"><i className="yo-ico">&#xe63a;</i></div>
			          <h2>注册登录</h2>			          
			          <form>
			              <div className="user">
			                    <i className="yo-ico">&#xe61a;</i>
			                    <input type="text" ref="username" placeholder="输入用户账号"   />
			              </div>
			              <div className="pass">
			                     <i className="yo-ico">&#xe615;</i>
			                     <input type="password" ref="password" placeholder="输入密码" />
			                     <b></b>
			                </div>
			                
			               <div><input type="button" onClick={this. login.bind(this)} value="确定" className="submit"/></div>
			          </form>
			          
			           <p className="choose"><Link to="/mine/MineRegister" >立即注册</Link></p>
			           
			           <div className="social">
				           <b></b>
				           <span>使用社交账号登录</span>
				           <b></b>
			           </div>
			           
			           <div className="communication">
				           <a><i className="yo-ico">&#xe62d;</i></a>
				           <a><i className="yo-ico">&#xe633;</i></a>
				           <a><i className="yo-ico">&#xe604;</i></a>
			           </div>
			           </div>
			           <Footer />
			</div>
			
		)
	}
}
