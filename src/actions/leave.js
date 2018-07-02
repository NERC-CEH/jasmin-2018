import fetchTodo from './fetch'

export default (name, dispatch, {history}) => {
  let pathname = history.location.pathname.replace(`/${name}`, '') || '/'
  const search = history.location.search

  if (pathname !== history.location.pathname) {
    history.push({
      pathname,
      search
    })

    fetchTodo(dispatch, {history})
  }
}
