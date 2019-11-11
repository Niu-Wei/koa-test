const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/a/b', (ctx, next) => {
    ctx.body = {
        name: 'wade'
    }
})

router.get('/c/d', (ctx, next) => {
    ctx.body = {
        name: 'wade'
    }
})

app.use(router.routes())

app.listen(8082)