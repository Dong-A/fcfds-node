var express = require('express');
var app = express();

var indexRouter = require("./routes/index.js")(app);
var aboutRouter = require("./routes/about.js")(app);
var usersRouter = require("./routes/users.js")(app);
var chatRouter = require("./routes/chat.js")(app);

app.set('port', process.env.PORT || 3030);
// views for rendering
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// 이렇게하거나 html모듈을 사용하거나

// public for express static files
app.use("/public", express.static(__dirname + "/public"));

app.use(function(req, res) {
  res.type("text/plain");
  res.status("404");
  res.send("404 - Not found");
});

app.use(function(req, res) {
  res.type("text/plain");
  res.status("500");
  res.send("500 - server error");
});

app.listen(app.get('port'), function() {
console.log('Second Express Server is running at localhost:' + app.get('port'));
});
