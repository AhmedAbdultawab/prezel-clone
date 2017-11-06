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

exports.retrieve = function(collection, iquery, callback) {
  mongoDB.collection(collection).findOne({id: iquery}).then(function (data) {
    callback(data);
  });
}

exports.update = function(collection, filter, update, callback) {
  mongoDB
    .collection(collection)     
    .updateOne(                
      { "id" : filter },                  
      { $set: { "contents": update } },                  
      {upsert:false},            
      function(err, status) { 
        if (err) doError(err);
        callback('Modified '+ status.modifiedCount 
                  +' and added '+ status.upsertedCount+" documents");
        });
}

exports.delete = function(collection, filter, callback) {
  mongoDB
    .collection(collection)     
    .deleteOne(                
      { "id" : filter },                                                
      function(err, status) { 
      success = status;
        if (err) doError(err);
        callback("Completed");
        });
}










