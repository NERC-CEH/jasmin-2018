import clone from 'clone'
import app from './reducer'

export default {
  'app': (state = {}, action) => app(clone(state), action)
}
