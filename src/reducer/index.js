import hero from './hero'
import home from './home'
import d110 from './d1-10'
import d111 from './d1-11'
import d1130 from './d1-130'
import d1315 from './d1-315'
import d1445 from './d1-445'
import d210 from './d2-10'
import d21030 from './d2-1030'
import d21130 from './d2-1130'
import d212 from './d2-12'

const pages = {
  home,
  d110,
  d111,
  d1130,
  d1315,
  d1445,
  d210,
  d21030,
  d21130,
  d212
}

export default (state, action) => {
  state.hero = hero

  let route = state.route || 'home'
  route = route.replace('in-route-', '')
  if (action.type === '@@router/LOCATION_CHANGE') {
    const pathname = action.payload.pathname
    if (pathname !== '/') route = pathname.replace(/\//g, '').replace('-', '')
    else route = 'home'
  }
  state.route = `in-route-${route}`

  state.pages = pages

  return state
}
