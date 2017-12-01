// All routes
var TitleSlide = require("../models/titleModel.js")
var AgendaSlide = require("../models/agendaModel.js")
var StatsSlide = require("../models/statsModel.js")
var GeneralSlide = require("../models/generalModel.js")
var ComparisonSlide = require("../models/comparisonModel.js")
var pptx = require('pptxgenjs');
var typeOf = require('get-type-of');


exports.init = function(app) {
  // app opens up to home page
  app.get('/', home);
  //go button redirects to the form
  app.get('/form', getForm);
  app.get("/generatePres", generatePres);
  app.get("/presType", presType);
  app.post('/ppt', makePowerpoint);
  app.get("/color", color);

}

home = function(req, res) {
  res.render('home.html');
};

getForm = function(req, res) {
  res.render('form.html');
};

presType = function(req, res) {
  res.render('type.html');
};

generatePres = function(req, res) {
    res.render('generate_pres.html');
  };

makePowerpoint= function(req, res) {
  var i = req.body.formData
  var presentationObject = JSON.parse(i);
  var presTitle = presentationObject.presentation.title;
  var presAuthors = presentationObject.presentation.authors;
  var titleSlide = new TitleSlide(pptx, presTitle, presAuthors, 1);
   for (i=0; i < presentationObject.presentation.slides.length; i++) {
      var slideObject = presentationObject.presentation.slides[i];
      var ignoreList = presentationObject.presentation.ignoreSlides
      //console.log(slideObject)
      if (isRemoveSlide(slideObject.slideID, ignoreList)) {
        console.log("skipping")
        console.log(slideObject.slideID)
        continue;
      }
      else {
        console.log("creating")
        console.log(slideObject)
        //comparison slide
        if (slideObject["slide_type"] == "comparison") {
          var title = slideObject.topic_title;
          var topic1 = slideObject["subtopics"][0];
          var topic2 = slideObject["subtopics"][1];
          var slide= new ComparisonSlide(pptx, title, topic1, topic2, 1)
        }
        //generalSlide
        else if (slideObject["slide_type"] == "general") {
          var title = slideObject.topic_title;
          var topics = slideObject["subtopics"];
          var slide= new GeneralSlide(pptx,title, topics, 1)
        }
        // agendaSlide
        else if (slideObject["slide_type"] == "agenda") {
          console.log("creating agenda")
          var title = slideObject.topic_title;
          var list = slideObject.text_content[0].split(",").slice(0,5);
          var slide= new AgendaSlide(pptx, title, list, 1)
        }
        //statistics slide
        else if (slideObject["slide_type"] == "statistics") {
          var title = slideObject.topic_title;
          var topics = slideObject["subtopics"];
          var slide= new StatsSlide(pptx, title, topics, 1)
        }
      }
    }
  //  console.log(typeOf(presTitle) )
  //  pptx.save('Node_Demo');
    var exportName = presTitle;
    pptx.save( exportName, function(filename){ console.log('Inline callback here! -> '+exportName); } );
    console.log('\nFile created:\n'+' * '+exportName);
    res.render('givePrez');
};


isRemoveSlide = function (slideID, i) {
  console.log("in function is remove slide");
  for (var j=0; j < i.length; j++) {
    if (i[j] == slideID) {
      return true
    }
  }
  return false
   /*if (i.contains(slideID)) {
    return true;
  }
  console.log("false")
  return false; */

}

color = function(req, res) {
  res.render('color.html');
};
