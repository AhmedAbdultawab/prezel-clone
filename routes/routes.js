// Access to Models 
var presentationModel = require("../models/presentationModel.js")

// All routes 
exports.init = function(app) {
  // routes to deal with home, login, signup
  app.get('/', index); 


  // Routes that deal with notes and updating them 
  app.get('/presentations', getForm); 
  app.post('/presentations', doCreate); 

}

index = function(req, res) {
	res.render("test.html");
};

getForm = function(req, res) {
  res.render("form");
};


// Handling Calls
doCreate = function(req, res){
  if (Object.keys(req.body).length == 0) {
    res.render('form', {title: 'Create a presentation? ', obj: "No create message body found"});
    return;
  }
  presentationModel.create ( "presentations", 
	                    req.body,
		                  function(result) {
  		                  var success = (result ? "Create successful" : "Create unsuccessful");
	  	                  res.render('form', {title: 'Presentation created? ', obj: success});
		                  });
};
