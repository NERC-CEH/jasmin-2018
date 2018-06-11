const data = require('../data')
const itemElement = require('./item')

module.exports = () => {
  let elements = data.get()
    .filter(item => !item.done)
    .map(itemElement)

  if (elements.length === 0) {
    elements = [{
      key: 'all-done',
      type: 'paragraph',
      props: {
        large: true,
        contents: 'No more TODOs to do'
      }
    }]
  }

  return {
    size: '3',
    className: 'outstanding',
    left: {
      label: 'Hide Outstanding',
      visible: true,
      onClick: 'leave-outstanding'
    },
    sections: [{
      key: 'outstanding',
      elements
    }]
  }
}
