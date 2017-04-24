import React, {Component} from 'react'

import Classificationnav from './Classificationnav'
import ClassificationcolumnList from './ClassificationcolumnList'

class Classificationcolumn extends Component {
  render() {
    return (
      <div className="m-classificationcolumn">
      	<Classificationnav />
      	<ClassificationcolumnList />
      </div>
    )
  }
}

export default Classificationcolumn
