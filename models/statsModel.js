var pptx = require('pptxgenjs');
class StatsSlide {
  constructor(pres, title, stats, color, temp) {
    this.title = title;
    this.stats = stats;
    this.color = color;
    this.template = temp;
    this.slide= pptx.addNewSlide();
    this.generateSlide();
  }
  generateSlide() {
    var titleSize = this.template.header.size;
    var titleFont = this.template.header.font;
    var titlePos = { x:"10%", y:"10%", font_size:titleSize, color:this.color };
    var statNum = this.stats[0].name;
    var statNumSize = this.template.subheader.size;
    var statNumPos = { x:"20%", y:"30%", font_size:statNumSize, color:this.color };
    var statContent = this.stats[0].text_content;
    var statContentSize = this.template.content.size;
    var statContentPos = { x:"35%", y:"35%", font_size:statContentSize, color:'000000' };
    this.slide.addText(this.title, titlePos);
    this.slide.addText(statNum, statNumPos);
    this.slide.addText(statContent, statContentPos);
  /*need some loop to get stat.content combo, and place it
    for (i = 0; i < this.stats.length; i++)  {
      var s = this.stats[i]
      var c = this.content[i]
      var sPos = { x:3.0, y:4.5, font_size:20, color:'00FF00' };
      var cPos = { x:3.0, y:4.5, font_size:20, color:'00FF00' };
      this.slide.addText(s, sPos)
      this.slide.addText(c, cPos) */

   }

 };

module.exports = StatsSlide;

/*
var statSlide = pptx.addNewSlide();
var statTitle = slideObject.topic_title;
console.log(statTitle);
var statSubtopics = slideObject["subtopics"];
var statNum = statSubtopics.name[0];
var statText = slideObject.text_content[0];
var position1 = { x:1.0, y:1.5, font_size:52, color:'000000' };
var position2 = { x:6.0, y:2.5, font_size:36, color:'000000' };
statSlide.addText(statTitle);
statSlide.addText(statNum, position1);
statSlide.addText(statText, position2); */
