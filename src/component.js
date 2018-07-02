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
        <Sections {...this.props.pages.home} actions={this.props.jasminActions} />
        <Sections {...this.props.pages.d110} actions={this.props.jasminActions} />
        <Sections {...this.props.pages.d111} actions={this.props.jasminActions} />
        <Sections {...this.props.pages.d1130} actions={this.props.jasminActions} />
        <Sections {...this.props.pages.d1315} actions={this.props.jasminActions} />
        <Sections {...this.props.pages.d1445} actions={this.props.jasminActions} />
        <Sections {...this.props.pages.d210} actions={this.props.jasminActions} />
        <Sections {...this.props.pages.d21030} actions={this.props.jasminActions} />
        <Sections {...this.props.pages.d21130} actions={this.props.jasminActions} />
        <Sections {...this.props.pages.d212} actions={this.props.jasminActions} />
      </SectionsContainer>
    </div>
  }
}

export default Component
