var express = require('express');
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views','./src/views');    
app.set('view engine','ejs');    


app.get('/', function(req, res){
   // res.send('hello world');
    res.render('index', {list: ['first var', '2', '3rd v@l']});
    
});

app.get('/routing', function(req, res){
 res.send('I am a cheesy potato');
    
});
 
app.listen(port, function(err){
   console.log('The server is running on port:  ' + port);

});