var express = require('express');

var eventRouter = express.Router();
    
var eventsData = [ {
    name : 'Event 1~',
    description : 'first event',
    date : '2017.01.01',
    time : '10:00 PM',
    duration : '1 hour',
    location: {
        streetAddr: '123 yolo street',
        city : 'Middleton',
        zip: '53562',
        state: 'WI'
    },
    capacity : 100
},
{
    name : 'Event 2~',
    description : 'second event',
    date  : '2017.02.01',
    time : '11:00 PM',
    duration : '1 hour',
    location: {
        streetAddr: '1113 yolo street',
        city : 'Middleton',
        zip: '53562',
        state: 'WI'
    },
    capacity : 100
    },
    {
        name : 'Single Event~ ',
    description : 'solo  event',
    date  : '2011.02.01',
    time : '1:00 PM',
    duration : '1 hour',
    location: {
        streetAddr: '222s yolo street',
        city : 'Middleton',
        zip: '53562',
        state: 'WI'
    },
    capacity : 100
    }
];
eventRouter.route('/')
    .get(function(req, res){
        res.render('events',{
        list: ['aaaaa', 'bbbbb', '3cccccccl'],
        nav : [{Link : 'Services', Text : 'Services'}, 
            {Link :'Portfolio', Text:'Portfolio'},
            {Link :'About', Text:'About'},
            {Link :'Team', Text:'Team'},
            {Link :'Contact', Text:'Contact'},
            {Link :'Events', Text:'Events'}
        ],
        events : eventsData 
    });
});

eventRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
           res.render('event', {
        list: ['first var', '2', '3rd v@l'],
        nav : [{Link : 'Services', Text : 'Services'}, 
            {Link :'Portfolio', Text:'Portfolio'},
            {Link :'About', Text:'About'},
            {Link :'Team', Text:'Team'},
            {Link :'Contact', Text:'Contact'},
            {Link :'Events', Text:'Events'}
        ],
        events : eventsData[id]
    });
});
    


module.exports = eventRouter;