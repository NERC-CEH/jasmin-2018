import fetchTodo from './fetch'
import qs from 'qs'

const toISOString = date => {
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  if (month < 10) month = `0${month}`
  let day = date.getDate()
  if (day < 10) day = `0${day}`

  return `${year}-${month}-${day}`
}

export default (dispatch, {history}) => {
  const goto = (name) => {
    let pathname = history.location.pathname
    const prefix = pathname.charAt(pathname.length - 1) === '/' ? '' : '/'
    if (!pathname.includes(name)) pathname += `${prefix}${name}`
    const search = history.location.search
    if (pathname !== history.location.pathname) {
      history.push({
        pathname,
        search
      })

      fetchTodo(dispatch, {history})
    }
  }

  const gotoDay = (direction) => {
    const search = history.location.search
    const query = qs.parse(search.replace('?', ''))
    let date = query.date ? new Date(query.date) : new Date()
    var oneDay = (24 * 60 * 60 * 1000)
    date.setTime(date.getTime() + direction * oneDay)
    query.date = toISOString(date)
    if (toISOString(date) === toISOString(new Date())) delete query.date
    history.push({
      search: qs.stringify(query)
    })
  }

  return {
    'goto-done': () => { goto('done') },
    'goto-outstanding': () => { goto('outstanding') },
    'goto-previous-day': () => {
      gotoDay(-1)
      fetchTodo(dispatch, {history})
    },
    'goto-today': () => {
      const search = history.location.search
      const query = qs.parse(search.replace('?', ''))
      delete query.date
      history.push({
        search: qs.stringify(query)
      })
      fetchTodo(dispatch, {history})
    },
    'goto-next-day': () => {
      gotoDay(1)
      fetchTodo(dispatch, {history})
    },
    'change-date': ({args}) => {
      const search = history.location.search
      const query = qs.parse(search.replace('?', ''))
      query.date = toISOString(args[0])
      history.push({
        search: qs.stringify(query)
      })
      fetchTodo(dispatch, {history})
    },
    'toggle-item': ({args, data, payload}) => {
      fetchTodo(dispatch, {history}, 'post', {
        done: args[0],
        ...payload
      })
    },
    'add': ({data}) => {
      fetchTodo(dispatch, {history}, 'post', {
        done: false,
        ...data
      })
    }
  }
}
