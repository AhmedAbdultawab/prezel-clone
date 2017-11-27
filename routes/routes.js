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
  app.get("/presType", presType);

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
presType = function(req, res) {
  res.render('type.html');
};
