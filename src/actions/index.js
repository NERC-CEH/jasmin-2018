import init from './init'
import hero from './hero'
import done from './done'
import todo from './todo'
import outstanding from './outstanding'
import profile from './profile'

export default (dispatch, router) => ({
  init: init(dispatch, router),
  heroActions: hero(dispatch, router),
  doneActions: done(dispatch, router),
  todoActions: todo(dispatch, router),
  outstandingActions: outstanding(dispatch, router),
  profileActions: profile(dispatch, router)
})
