var pptx = require('pptxgenjs');
class GeneralSlide {
  constructor(pres, title, topics, color, temp) {
    this.title = title;
    this.topics = topics;
    this.color = color;
    this.template = temp;
    this.slide= pptx.addNewSlide();
    this.generateSlide()
  }
  generateSlide() {
  //pull template from the template from here to inteact with this model
    var titleSize = this.template.header.size
    var titleFont = this.template.header.font
    var contentSize = this.template.content.size
    var subheaderSize = this.template.subheader.size
    var subHeader = this.topics[0].name
    var content = this.topics[0].text_content;
   // var template = null //call to template
    var titlePos = { x:"10%", y:"20%", font_size:titleSize, color:this.color };
    this.slide.addText(this.title, titlePos)
    var subHeaderPos = { x:"10%", y:"40%", font_size:subheaderSize, color:this.color };
    var subHeaderContentPos = { x:"10%", y:"60%", font_size:contentSize, color:this.color };
    this.slide.addText(subHeader, subHeaderPos)
    this.slide.addText(content, subHeaderContentPos)

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
