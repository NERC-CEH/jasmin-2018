import React from 'react'
import {Route} from 'react-router'
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import Container from './container'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

const App = () => <Provider store={store}>
  <ConnectedRouter history={history}>
    <div>
      <Route path='*' component={Container} />
    </div>
  </ConnectedRouter>
</Provider>

export default App
