var pptx = require('pptxgenjs');
class ComparisonSlide {
  constructor(pres, title, subtopic1, topic1, subtopic2, topic2, color, colorLight, temp) {
    this.title = title;
    this.subtopic1 = subtopic1;
    this.topic1 = topic1;
    this.subtopic2 = subtopic2;
    this.topic2 = topic2;
    this.color= color;
    this.colorLight = colorLight;
    this.template = temp;
    this.slide= pptx.addNewSlide();
    this.generateSlide()
  }
  generateSlide() {
  //pull template from the template from here to inteact with this model
  // To improve: fix it to loop based on subtopics
    var titleSize = this.template.subheader.size
    var titlePos = { x:"3%", y:"8%", font_size:titleSize, bold: true, color:this.colorLight};
    this.slide.addText(this.title, titlePos)
    var subtopicSize = this.template.comparison.size
    var subtopic1Pos = { x:'18%', y:'60%', font_size:subtopicSize, color: "000000" };
    var subtopic2Pos = { x: '52%', y:'60%', font_size:subtopicSize, color: "000000" };
    this.slide.addText(this.subtopic1, subtopic1Pos )
    this.slide.addText(this.subtopic2, subtopic2Pos )
    var contentSize = this.template.content.size
    var topic1Pos = { x: '18%', y:'66%', w: '30%', font_size:contentSize, valign: 'top', color: "A8A8A8" };
    var topic2Pos = { x:'52%', y:'66%', w: '30%',font_size:contentSize, valign: 'top', color: "A8A8A8" };
    console.log(this.topic1)
    console.log(this.topic2)
    this.slide.addText(this.topic1, topic1Pos )
    this.slide.addText(this.topic2, topic2Pos )

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
