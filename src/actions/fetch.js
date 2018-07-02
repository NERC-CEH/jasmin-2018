import qs from 'qs'

const HOST = process.env.REACT_APP_API_HOST

export default (dispatch, {history}, method = 'get', body = null) => {
  const search = history.location.search || ''
  const query = qs.parse(search.replace('?', ''))
  query.date = query.date ? new Date(query.date) : new Date()

  if (history.location.pathname.includes('done')) query.done = true
  if (history.location.pathname.includes('outstanding')) query.outstanding = true

  if (body) body = JSON.stringify(body)

  fetch(`${HOST}/?${qs.stringify(query)}`, {method, body})
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: '@@app/fetch',
        payload: data
      })
    })
}
