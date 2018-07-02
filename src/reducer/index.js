export default (state, action) => {
  state.done = state.done || {
    key: 'done',
    size: '0'
  }

  state.outstanding = state.outstanding || {
    key: 'outstanding',
    size: '0'
  }

  state.todo = state.todo || {
    key: 'todo',
    size: '12'
  }

  if (action.type === '@@app/fetch') {
    state.hero = action.payload.hero
    state.done = action.payload.done
    state.todo = action.payload.todo
    state.outstanding = action.payload.outstanding
    state.profile = action.payload.profile
  }
  if (action.type === '@@router/LOCATION_CHANGE') {
    let route = 'todo'
    if (action.payload.pathname.includes('profile')) route = 'profile'
    else if (action.payload.pathname.includes('done')) route = 'done'
    else if (action.payload.pathname.includes('outstanding')) route = 'outstanding'
    else if (action.payload.pathname.includes('done') && action.payload.pathname.includes('outstanding')) route = 'done-outstanding'
    state.route = `in-route-${route}`
  }
  return state
}
