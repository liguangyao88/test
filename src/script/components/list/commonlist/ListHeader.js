import React, {Component} from 'react'
import {browserHistory} from 'react-router'

class ListHeader extends Component {
   render() {
    return (
      <div className="yo-header">
        <h2 className="title">礼物榜</h2>
        <span className="regret yo-ico">&#xf07e;</span>
      </div>
    )
  }
}
export default ListHeader