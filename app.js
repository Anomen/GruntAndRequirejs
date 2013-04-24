var connect = require('connect');

var app = connect()
  .use(connect.static('public'))
  .listen(3000);
