mongodb://erwilson:sassycat@ds143245.mlab.com:43245/475database

var MongoClient = require('mongodb').MongoClient;
var mongoDB; 

MongoClient.connect('mongodb://erwilson:475team@ds143245.mlab.com:43245/475database', (err, db) => {
	if (err) return console.log(err);
  	mongoDB = db;
});


exports.retrieve = function(collection, nquery, callback) {
  mongoDB.collection(collection).findOne({name: nquery}).then(function (data) {
    callback(data);
  });
}




















