// Access to Models 
var templateModel = require("../models/templateModel.js")

// All routes 
exports.init = function(app) {
  // routes to deal with home, login, signup
  app.get('/', index); 


  // Routes that deal with notes and updating them 
  app.post('/template', doCreate); 

}

index = function(req, res) {
	res.render("index");
};


// Handling Calls to Notes
doCreate = function(req, res){
  console.log(req.body.email);
  if (Object.keys(req.body).length == 0) {
    res.render('message', {title: 'Create a template? ', obj: "No create message body found"});
    return;
  }
  templateModel.create ( "templates", 
	                    req.body,
		                  function(result) {
  		                  var success = (result ? "Create successful" : "Create unsuccessful");
	  	                  res.render('message', {title: 'Templated created? ', obj: success});
		                  });
};
