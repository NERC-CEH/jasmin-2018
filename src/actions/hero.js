export default (dispatch, {history}) => ({
  'goto-home': () => {
    if (history.location.pathname !== '/') history.push('/')
  },
  'goto-d1-10': () => {
    if (history.location.pathname !== '/d1-10') history.push('/d1-10')
  },
  'goto-d1-11': () => {
    if (history.location.pathname !== '/d1-11') history.push('/d1-11')
  },
  'goto-d1-130': () => {
    if (history.location.pathname !== '/d1-130') history.push('/d1-130')
  },
  'goto-d1-245': () => {
    if (history.location.pathname !== '/d1-245') history.push('/d1-245')
  },
  'goto-d1-315': () => {
    if (history.location.pathname !== '/d1-315') history.push('/d1-315')
  },
  'goto-d1-445': () => {
    if (history.location.pathname !== '/d1-445') history.push('/d1-445')
  },
  'goto-d2-10': () => {
    if (history.location.pathname !== '/d2-10') history.push('/d2-10')
  },
  'goto-d2-1030': () => {
    if (history.location.pathname !== '/d2-1030') history.push('/d2-1030')
  },
  'goto-d2-1130': () => {
    if (history.location.pathname !== '/d2-1130') history.push('/d2-1130')
  },
  'goto-d2-12': () => {
    if (history.location.pathname !== '/d2-12') history.push('/d2-12')
  }
})
