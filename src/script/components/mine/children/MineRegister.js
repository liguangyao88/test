import React,{Component} from "react"
import {hashHistory} from 'react-router'
export default class MineRegister extends Component {
	
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
	
	
  registor() {

    this.submit({
      uri: '/nodejs/users/registor',
      callback: (res)=>{
        if (res.users) {
//      	console.log(res.username)
            localStorage.setItem('username', res.username)
			hashHistory.push("/Mine/MineLogin")		
        } else {
          console.log("false")
        }
      },
      formData: {
        username: this.refs.username2.value,
        password: this.refs.password2.value
      }
    })
  }
	
	render(){
		return (
			<div className="mine_register">  
			          <form>
			              <div className="user">
			                    <i className="yo-ico">&#xe61a;</i>
			                    <input type="text" ref="username2" placeholder="输入用户账号"   />
			              </div>
			              <div className="pass">
			                     <i className="yo-ico">&#xe615;</i>
			                     <input type="password" ref="password2" placeholder="输入密码" />
			                     <b></b>
			                </div>
			                
			               <div><input type="button" onClick={this.registor.bind(this)} value="立即注册" className="submit"/></div>
			               
			          </form>
			</div>
		)
	}
}
