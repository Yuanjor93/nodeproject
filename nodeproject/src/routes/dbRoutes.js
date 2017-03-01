var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;


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


dbRouter.route('/AddEventData')
    .get(function(req, res){
        
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
           var collection = db.collection('events');
           collection.insertMany(eventsData, function(err, results){
            res.send(results);
            db.close();
           });
        });
}); 

module.exports = dbRouter;