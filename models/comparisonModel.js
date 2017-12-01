class ComparisonSlide {
  constructor(pres, title, topic1, topic2, templateID) {
    this.title = title;
    this.topic1 = topic1;
    this.topic2 = topic2;
    this.slide= pptx.addNewSlide();
    this.generateSlide()
  }
  generateSlide() {
  //pull template from the template from here to inteact with this model
    var template = null //call to template
    var titlePos = { x:1.0, y:0.5, font_size:42, color:'00FF00' };
    this.slide.addText("comaprison", titlePos)
    
   }

 };

module.exports = ComparisonSlide;

/*
var compSlide = pptx.addNewSlide();
var compTitle = slideObject.topic_title;
var compSubtopics = slideObject["subtopics"];
var compSub1 = compSubtopics[0].name;
var compSub1Text = compSubtopics[0].text_content;
var compSub2 = compSubtopics[1].name;
var compSub2Text = compSubtopics[1].text_content;
var position1 = { x:1.0, y:1.5, font_size:36, color:'000000' };
var position2 = { x:6.0, y:1.5, font_size:36, color:'000000' };
var position3 = { x:0.5, y:3.0, font_size:12, color:'000000' };
var position4 = { x:4.5, y:3.0, font_size:12, color:'000000' };
compSlide.addText(compTitle);
compSlide.addText(compSub1, position1);
compSlide.addText(compSub1Text, position3);
compSlide.addText(compSub2, position2);
compSlide.addText(compSub2Text, position4); */
