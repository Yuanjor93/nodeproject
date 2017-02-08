var express = require('express');
var app = express();

var port = process.env.PORT;
var eventRouter = require('./src/routes/eventRoutes');
var dbRouter = require('./src/routes/dbRoutes');

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views','./src/views');    
app.set('view engine','ejs');    

app.use('/Events', eventRouter);
app.use('/Db', dbRouter);



// eventRouter.route('/event')
//     .get(function(req, res){
//         res.send('Single Event is Successful~');
//     })




app.get('/', function(req, res){
   // res.send('hello world');
    res.render('index', {
        list: ['first var', '2', '3rd v@l'],
        nav : [{Link : 'Services', Text : 'Services'}, 
            {Link :'Portfolio', Text:'Portfolio'},
            {Link :'About', Text:'About'},
            {Link :'Team', Text:'Team'},
            {Link :'Contact', Text:'Contact'},
            {Link :'Events', Text:'Events'}
        ]
    });
    
});

app.get('/routing', function(req, res){
 res.send('I am a cheesy potato');
    
});
  
app.listen(port, function(err){
   console.log('The server is running on port:  ' + port);

});

