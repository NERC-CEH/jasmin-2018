import React from 'react'
import {SectionsContainer, Sections, Hero} from '@cehappdev/ceh-view'

class Component extends React.Component {
  componentDidMount () {
    this.props.init()
  }
  render () {
    return <div>
      <Hero {...this.props.hero} actions={this.props.heroActions} />
      <SectionsContainer className={this.props.route}>
        <Sections {...this.props.done} actions={this.props.doneActions} />
        <Sections {...this.props.todo} actions={this.props.todoActions} />
        <Sections {...this.props.outstanding} actions={this.props.outstandingActions} />
        <Sections {...this.props.profile} actions={this.props.profileActions} />
      </SectionsContainer>
    </div>
  }
}

export default Component
