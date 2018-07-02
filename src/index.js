import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import '@cehappdev/ceh-view/dist/index.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
