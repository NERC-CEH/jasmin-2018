const Koa = require('koa')
const KoaRouter = require('koa-router')
const koaBody = require('koa-body')
const cors = require('@koa/cors')
const logger = require('koa-logger')

const sections = require('./sections')

const app = new Koa()
const router = new KoaRouter()

router.get('/init', async (ctx) => {
  ctx.body = sections()
})

app.use(logger())
app.use(koaBody())
app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(4000)

console.log('started on http://localhost:4000')