// Access to Models
var presentationModel = require("../models/presentationModel.js")

// All routes
exports.init = function(app) {
  // app opens up to home page
  app.get('/', home);
  //go button redirects to the form
  app.get('/form', index);
  //app.get('/home', home);
  app.get("/generatePres", generatePres);

  // Routes that deal with notes and updating them
  app.get('/presentations', getForm);
  app.post('/presentations', doCreate);

}

generatePres = function(req, res) {
    res.render('generate_pres.html');
  };
index = function(req, res) {
	res.render('form.html');
};

home = function(req, res) {
  res.render('home.html');
};

getForm = function(req, res) {
  res.render('form');
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
