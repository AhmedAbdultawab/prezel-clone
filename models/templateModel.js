mongodb://erwilson:sassycat@ds143245.mlab.com:43245/475database

var MongoClient = require('mongodb').MongoClient;
var mongoDB; 

MongoClient.connect('mongodb://erwilson:475team@ds143245.mlab.com:43245/475database', (err, db) => {
	if (err) return console.log(err);
  	mongoDB = db;
});

exports.create = function(collection, data, callback) {
  mongoDB.collection(collection).insertOne(
    data,                    
    function(err, status) {   
      if (err) doError(err);
      var success = (status.result.n == 1 ? true : false);
      callback(success,data);
    });
}










