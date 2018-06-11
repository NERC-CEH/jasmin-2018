import fetchTodo from './fetch'

export default (dispatch, {history}) => () => {
  fetchTodo(dispatch, {history})
}
