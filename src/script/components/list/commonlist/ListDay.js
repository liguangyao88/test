import React, {Component} from 'react'
import {browserHistory} from 'react-router'

class Header extends Component {
  back() {
    browserHistory.goBack()
  }
  render() {
    return (
      <div className="yo-header">
        <h2 className="title">{this.props.title}</h2>
        <span className={`regret yo-ico ${this.props.isShowBack ? '' : 'hide'}`} onClick={this.back.bind(this)}>&#xf07d; 返回</span>
        <span className="affirm yo-ico">&#xf07e;</span>
      </div>
    )
  }
}

export default Header