// module.exports = function(app) {
//   app.get('/', function(req, res) {
//     res.send('Hello Second Express!');
//   });
// };
// 이건 그냥 단순한 메시지만 보내는 것이다.
// HTML 템플릿을 보내는 것이 아니다.


module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });
};
