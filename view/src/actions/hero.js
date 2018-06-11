export default (dispatch, {history}) => ({
  'goto-home': () => {
    if (history.location.pathname !== '/') history.push('/')
  },
  'goto-todo': () => {
    if (history.location.pathname !== '/todo') history.push('/todo')
  }
})
