var pptx = require('pptxgenjs');

class AgendaSlide {
  constructor(pres, title, list, templateID) {
    this.title = title;
    this.agendaList = list;
    this.slide= pptx.addNewSlide();
    this.generateSlide()
  }
  generateSlide() {
  //pull template from the template from here to inteact with this model
    var template = null //call to template
    var titlePos = { x:1.0, y:0.5, font_size:42, color:'00FF00' };
    this.slide.addText("agenda", titlePos)

   }

 };

module.exports = AgendaSlide;

 /*
 var genSlide = pptx.addNewSlide();
 var genTitle = slideObject.topic_title;
 var genSubtopic = slideObject.subtopics.name;
 var genList = slideObject.text_content[0].split(",").slice(0,5);
 var primaryColor = '000000';
 var secondaryColor = '009900';
 var Ycoord = 1.8;
 var spaceBtwn = 4 / genList.length ; // calculates space between elements based on their number (max 5)
 for (var i = 0; i < genList.length; i++)
 {
   genSlide.addText(genList[i], { x:1.0, y: Ycoord, font_size:12, color: primaryColor });
   Ycoord += spaceBtwn;
 }
 var position1 = { x:1.0, y:0.5, font_size:40, color: primaryColor };
 var position2 = { x:1.0, y:1.2, font_size:30, color: secondaryColor };
 genSlide.addText(genTitle,position1);
 genSlide.addText(genSubtopic, position2); */
