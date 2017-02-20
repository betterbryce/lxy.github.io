
"use strict"

let views = require('co-views');


module.exports = {
    //首页
    index: function *() {

        this.body = yield this.render('site/index');
    },
};
