module.exports = function(app) {
  var users = [
    {id:1, name:'John', email:'John@gmail.com'},
    {id:2, name:'Kim', email:'Kim@gmail.com'},
    {id:3, name:'Lee', email:'Lee@gmail.com'},
    {id:4, name:'Park', email:'Park@gmail.com'},
    {id:5, name:'Choi', email:'Choi@gmail.com'},
    {id:6, name:'Jang', email:'Jang@gmail.com'},
    {id:7, name:'Kwon', email:'Kwon@gmail.com'},
    {id:8, name:'Ho', email:'Ho@gmail.com'},
    {id:9, name:'Ahn', email:'Ahngmail.com'},
    {id:10, name:'Jane', email:'Jane@gmail.com'}
  ];

  app.get('/users', function(req, res) {
    res.send(users);
  });

  app.get('/users/random', function(req, res) {
    var n = Math.floor(Math.random() * users.length);
    var u = users[n];
    res.json(u);
  });

  app.get('/users/:id', function(req, res) {
    if (users.length < req.params.id || req.params.id <= 0) {
      res.statusCode = 404;
      return res.send("404 - Not Found, Choose 1 to 10");
    }
    var u = users[req.params.id - 1];
    res.json(u);
  });
};
