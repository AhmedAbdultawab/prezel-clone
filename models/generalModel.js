class GeneralSlide {
  constructor(pres, title, topics, templateID) {
    this.title = title;
    this.topics = topics;
    this.slide= pptx.addNewSlide();
    this.generateSlide()
  }
  generateSlide() {
  //pull template from the template from here to inteact with this model
    var template = null //call to template
    var titlePos = { x:1.0, y:0.5, font_size:42, color:'00FF00' };
    this.slide.addText(this.title, titlePos)
    }
   }

 };

module.exports = GeneralSlide;


/* var genSlide = pptx.addNewSlide();
var genTitle = slideObject.topic_title;
var genSubtopic = slideObject.subtopics.name;
var genText = slideObject.text_content[0];
var position1 = { x:3.0, y:1.5, font_size:40, color:'000000' };
var position2 = { x:3.0, y:3.5, font_size:30, color:'000000' };
var position3 = { x:3.0, y:4.5, font_size:12, color:'000000' };
genSlide.addText(genTitle,position1);
genSlide.addText(genSubtopic, position2);
genSlide.addText(genText, position3); */
