module.exports = function(app) {
  app.get('/chat', function(req, res) {
    res.send("This is chat");
  });
};
