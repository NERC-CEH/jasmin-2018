const data = require('../data')
const itemElement = require('./item')

const dayElement = (key, label, side, date) => ({
  key,
  type: 'direction',
  props: {
    className: 'nav-button',
    label,
    right: side === 'right',
    left: side === 'left',
    onClick: {
      action: `goto-${key}`,
      payload: {date}
    }
  }
})

const toISO = (date) => date.toISOString().split('T')[0]

module.exports = (date = new Date().toString(), done, outstanding, clear) => {
  const today = new Date(date)
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)

  let nav = [
    dayElement('previous-day', 'YESTERDAY', 'left', yesterday),
    dayElement('next-day', 'TOMORROW', 'right', tomorrow)
  ]
  if (toISO(today) !== toISO(new Date())) {
    nav = [
      dayElement('previous-day', 'PREVIOUS DAY', 'left', yesterday),
      dayElement('today', 'TODAY', today),
      dayElement('next-day', 'NEXT DAY', 'right', tomorrow)
    ]
  }

  let size = 12
  const left = {
    label: 'Done',
    visible: true,
    onClick: 'goto-done'
  }
  const right = {
    label: 'Outstanding',
    visible: true,
    onClick: 'goto-outstanding'
  }

  if (done) {
    size -= 3
    left.visible = false
  }
  if (outstanding) {
    size -= 3
    right.visible = false
  }
  size = '' + size

  const input = {
    key: 'add',
    className: 'add',
    elements: [{
      key: 'name',
      type: 'input-text',
      props: {
        label: 'Todo',
        buttons: [{
          key: 'add',
          label: 'ADD',
          icon: 'plus',
          onClick: 'add'
        }]
      }
    }]
  }

  if (clear) input.elements[0].props.value = ''

  return {
    size,
    className: 'todo',
    left,
    right,
    sections: [{
      key: 'calendars',
      className: 'cal',
      elements: [{
        key: 'calendar',
        type: 'calendar',
        props: {
          onChange: 'change-date',
          format: 'dS, mmmm, yyyy',
          value: today
        }
      }]
    },
    {
      key: 'nav',
      className: 'cal nav',
      elements: nav
    },
    {
      key: 'list',
      elements: data.get(today).map(itemElement)
    },
    input
    ]
  }
}
