const path = require('path')
const fs = require('fs-extra')

const toISO = (date) => date.toISOString().split('T')[0]

module.exports = {
  get (date) {
    if (typeof date === 'undefined') {
      return fs.readdirSync(__dirname)
        .filter(filename => filename.endsWith('.json'))
        .map(filename => path.resolve(__dirname, filename))
        .map(filename => {
          const value = fs.readJSONSync(filename)
          const split = filename.split('/')
          date = split[split.length - 1].replace('.json', '')
          value.forEach((item, index) => {
            item.date = date
            item.index = index
          })
          return value
        })
        .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
    } else {
      let filename = `${toISO(date)}.json`
      filename = path.resolve(__dirname, filename)
      let items = []
      if (fs.existsSync(filename)) {
        items = fs.readJSONSync(filename)
        items.map((item, index) => {
          item.date = toISO(date)
          item.index = index
          return item
        })
      }
      return items
    }
  },
  update ({value, done, index = -1, date}) {
    const items = this.get(new Date(date))
    let updated = false
    if (index !== -1) {
      items[index].done = done
      updated = true
    } else if (!items.some(item => item.title === value)) {
      items.push({title: value, done})
      updated = true
    }
    if (updated) {
      items.forEach(item => {
        delete item.date
        delete item.index
      })
      fs.writeFileSync(path.resolve(__dirname, `${toISO(new Date(date))}.json`), JSON.stringify(items, null, 4))
    }
    return updated
  }
}
