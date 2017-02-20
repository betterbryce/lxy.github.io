const app = require('koa')();
const logger = require('koa-logger');
const views = require('co-views');
const router = require('./config/router')();

app.env = process.env.NODE_ENV || 'development';

//读取ejs文件
app
    .use(function *(next) {
        this.render = views(__dirname + '/../public/views', {ext: 'ejs'});
        yield next;
    })
    .use(router.routes())
    .use(router.allowedMethods())
    .use(logger());

app.listen(31013, function(){
    console.log('listening on *:31013');
});

