exports.create = function(collection, data, callback) {
  mongoDB.collection(collection).insertOne(
    data,                    
    function(err, status) {   
      if (err) doError(err);
      var success = (status.result.n == 1 ? true : false);
      callback(success,data);
    });
}
