import leave from './leave'
import fetchTodo from './fetch'

export default (dispatch, {history}) => {
  return {
    'leave-outstanding': () => {
      leave('outstanding', dispatch, {history})
    },
    'toggle-item': ({args, data, payload}) => {
      fetchTodo(dispatch, {history}, 'post', {
        done: args[0],
        ...payload
      })
    }
  }
}
