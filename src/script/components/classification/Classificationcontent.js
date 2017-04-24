import React, {Component} from 'react'

import Classificationcolumn from './Classificationcolumn'
import Classificationother from './Classificationother'

class Classificationcontent extends Component {
  render() {
    return (
      <div className="m-Classificationcontent">
      	<Classificationcolumn />
      	<Classificationother />
      </div>
    )
  }
}

export default Classificationcontent