import React, {Component} from 'react'
import ListHeader from './commonlist/ListHeader'
import ListTop from './commonlist/ListTop'
import ListDay from './commonlist/ListDay'
import ListBanner from './commonlist/ListBanner'



class List extends Component {
  render() {
    return (
      <div className="m-List">
        <ListHeader />
        <ListTop/>
        <ListBanner/>
      </div>
    )
  }
}
export default List
