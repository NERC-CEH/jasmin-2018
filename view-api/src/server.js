const Koa = require('koa')
const KoaRouter = require('koa-router')
const koaBody = require('koa-body')
const cors = require('@koa/cors')
const logger = require('koa-logger')

const sections = require('./sections')
const data = require('./data')

const app = new Koa()
const router = new KoaRouter()

app.use(logger())
app.use(koaBody())
app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())

router.get('/', async (ctx) => {
  ctx.body = sections(ctx.query)
})

router.post('/', async (ctx) => {
  const body = JSON.parse(ctx.request.body)
  const updated = data.update({date: ctx.query.date, ...body})
  ctx.body = sections(ctx.query, updated)
})

app.listen(4000)

console.log('started on http://localhost:4000')
