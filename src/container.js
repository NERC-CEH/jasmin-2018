import {connect} from 'react-redux'
import reducer from './default-reducer'
import actions from './actions'
import Component from './component'

export default connect(reducer('app'), actions)(Component)
