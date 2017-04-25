import React, {Component} from 'react'

class Raidersnav extends Component {
  render() {
    return (
      <div className="m-Raidersnav">
      	<div><span>栏目</span></div>
      	<div><span>查看全部</span><em></em></div>
      </div>
    )
  }
  componentDidMount() {
    fetch(this.props.uri)
      .then((response)=>response.json())
      .then((res)=>{
        this.setState({
          dataSource: res.subjects
        })
      })
  }
}

export default Raidersnav
