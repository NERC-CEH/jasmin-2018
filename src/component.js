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
        <Sections {...this.props.jasmin} actions={this.props.jasminActions} />
      </SectionsContainer>
    </div>
  }
}

export default Component
