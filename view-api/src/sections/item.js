module.exports = ({index, title, done, date}) => ({
  key: `item-${date}-${index}`,
  type: 'checkbox',
  props: {
    className: 'todo-item',
    label: title,
    checked: done,
    onChange: {
      action: 'toggle-item',
      payload: {
        index,
        date
      }}
  }
})
