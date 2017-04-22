import React, {Component} from 'react'
import ListHeader from './commonlist/ListHeader'
import ListTop from './commonlist/ListTop'
import ListDay from './commonlist/ListDay'
import Footer from '../common/Footer'



class List extends Component {
  render() {
    return (
      <div className="m-List">
        <ListHeader />
        <ListTop/>
        
        <ListDay/>
        <Footer/>
      </div>
    )
  }
}
export default List
