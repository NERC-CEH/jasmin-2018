const heroSections = require('./hero')
const doneSections = require('./done')
const todoSections = require('./todo')
const outstandingSections = require('./outstanding')

module.exports = ({date, done = false, outstanding = false}, clear) => {
  return Object.assign(
    {},
    {hero: heroSections()},
    {done: doneSections(done)},
    {todo: todoSections(date, done, outstanding, clear)},
    {outstanding: outstandingSections(outstanding)}
  )
}
