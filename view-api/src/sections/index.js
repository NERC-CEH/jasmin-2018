module.exports = () => {
  return {
    app: {
      size: '12',
      sections: [{
        key: 'start',
        elements: [{
          key: 'a-button',
          type: 'button',
          props: {type: 'raised', label: 'CLICK ME', onClick: 'clickMe'}
        }]
      }]
    }
  }
}