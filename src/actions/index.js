import init from './init'
import hero from './hero'

export default (dispatch, router) => ({
  init: init(dispatch, router),
  heroActions: hero(dispatch, router)
})
