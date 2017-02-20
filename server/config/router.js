"use strict"

let router = require('koa-router')();
let siteController = require('../controllers/site');
let koaBody = require('koa-body')({jsonLimit: '100mb', formLimit: '100mb'});

router
    .get('/', siteController.index)

module.exports = function() {
    return router;
};
