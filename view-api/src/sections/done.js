const data = require('../data')
const itemElement = require('./item')

module.exports = () => {
  let elements = data.get()
    .filter(item => item.done)
    .map(itemElement)

  if (elements.length === 0) {
    elements = [{
      key: 'all-done',
      type: 'paragraph',
      props: {
        large: true,
        contents: 'Go do some TODOs'
      }
    }]
  }

  return {
    size: '3',
    className: 'done',
    right: {
      label: 'Hide Done',
      visible: true,
      onClick: 'leave-done'
    },
    sections: [{
      key: 'done',
      elements
    }]
  }
}
