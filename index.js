var express = require("express");


var app = express();

app.get('/', function (req, res) {
    res.render('./index.html');
});

app.get('/about', function (req, res) {
    res.render('./about.html');
});

app.get('/user/me', function (req, res) {
    res.render('./contactUs.html');
});

app.get('/persiandate', function (req, res) {
    res.render('./persian_datepicker.html');
});

app.get('/kendofilter', function (req, res) {
    res.render('./kendofilter.html');
});

app.get('/api/people', function (req, res) {
    /*console.log(req.query);
var q = JSON.parse(req.query);
    console.log(JSON.stringify(q));
    var date;
    var filters = req.query.filter.filters;

    for(var i;i<filters.length;i++){
        date = filters[i].value;
    }
*/

    var p = [
        {id: 1, firstName: 'first1', lastName: 'last1', age: 23, birthDate: '2015/7/17'},
        {id: 1, firstName: 'first1', lastName: 'last1', age: 23, birthDate: '1394/01/01'},
        {id: 1, firstName: 'first1', lastName: 'last1', age: 23, birthDate: '1394/01/01'},
        {id: 1, firstName: 'first1', lastName: 'last1', age: 23, birthDate: '1394/01/01'}
    ];

   /* for(i;i<p.length;i++){
        p[i].birthDate = date;
    }
*/
    res.json({Data: p});
});


app.get('/useingreuairejs', function (req, res) {
    res.render('./using_requirejs.html');
});

app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static(__dirname + '/public'));
app.use('/client', express.static(__dirname + '/client'));
app.use('/content', express.static(__dirname + '/client/content'));

app.listen(1024);

console.log('the app is listening on 1024 port');

