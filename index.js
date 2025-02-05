var express = require('express');
var path  = require('path');
var app = express();

//loading the static data - css, html, images
app.use(express.static(__dirname + '/public'));
app.get('/helloworld', function(req, res) {
    res.send("hello world!")
});
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/views/index.html'));
});
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/portfolio/views/home.html'));
});
app.listen(8000, () => {
    console.log('Server is running at port 8000');
})
