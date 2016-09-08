var express = require('express');
var app = express();
var router = require('./router/main.js')(app);

app.set('/views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/public', express.static(__dirname + '/public'));
app.set('port', 3030);


// app.use(function(req, res){
//   // 404 Error
//   if(res.status('404')){
//     res.type('text/plain');
//     res.send('404 - Not found!!!');
//   }
//   // 500 Error
//   if(res.status('500')){
//     res.type('text/plain');
//     res.send('500 - Server Error!!!');
//   }
// });


app.listen(app.get('port'), function(){
  console.log('Express server is running at localhost: ' + app.get('port') );
});