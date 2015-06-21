var express = require("express");

var app = express();

app.get('/', function(req , res){
    res.render('./index.html');
});

app.get('/about', function (req, res) {
    res.render('./about.html');
});

app.get('/user/me', function (req, res) {
    res.render('./contactUs.html');
});


app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);
app.use('/client', express.static(__dirname + '/client'));
app.use('/content', express.static(__dirname + '/client/content'));

app.listen(1024);

console.log('the app is listening on 1024 port');

