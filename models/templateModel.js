
var MongoClient = require('mongodb').MongoClient;
var mongoDB;

MongoClient.connect('mongodb://erwilson:475team@ds143245.mlab.com:43245/475database', (err, db) => {
	if (err) return console.log(err);
  	mongoDB = db;
});


exports.retrieve = function(collection, iquery, callback) {
  mongoDB.collection(collection).findOne({temp_id: iquery}).then(function (data) {
    callback(data);
  });
}
