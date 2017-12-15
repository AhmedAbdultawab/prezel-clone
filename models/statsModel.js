var pptx = require('pptxgenjs');
class StatsSlide {
  constructor(pres, title, stats, color, colorLight, temp) {
    this.title = title;
    this.stats = stats;
    this.color = color;
    this.colorLight = colorLight;
    this.template = temp;
    this.slide= pptx.addNewSlide();
    this.generateSlide();
  }
  generateSlide() {
    if (this.title != null) {
      var titleSize = this.template.header.size;
      var titleFont = this.template.header.font;
      var titlePos = { x:"10%", y:"10%", font_size:titleSize, color:this.colorLight };
      this.slide.addText(this.title, titlePos);
    }

    var statNumSize = this.template.stats.size;
    var statNumPos1 = { x:"13%", y:"7%", font_size:statNumSize, bold: true, valign: 'top', color:this.colorLight };
    var statContentSize = this.template.content.size;
    var statContentPos1 = { x:"30%", y:"13%", font_size:statContentSize, italic: true,  w: '70%', valign: 'top', color:'000000' };
    var statNum1 = this.stats[0].name
    var statContent1 = this.stats[0].text_content;
    this.slide.addText(statNum1, statNumPos1);
    this.slide.addText(statContent1, statContentPos1);

    if (this.stats[1].name) {
      var statNum2 = this.stats[1].name;
      var statContent2 = this.stats[1].text_content;
      var statNumPos2 = { x:"33%", y:"33%", font_size:statNumSize, bold: true, valign: 'top', color:this.colorLight };
      var statContentPos2 = { x:"43%", y:"40%", font_size:statContentSize, italic: true,  w: '50%', valign: 'top', color:'000000' };
      this.slide.addText(statNum2, statNumPos2);
      this.slide.addText(statContent2, statContentPos2);
    }
    if (this.stats[2].name) {
      var statNum3 = this.stats[2].name;
      var statContent3 = this.stats[2].text_content;
      var statNumPos3 = { x:"7%", y:"65%", font_size:statNumSize, bold: true, valign: 'top', color:this.colorLight};
      var statContentPos3 = { x:"33%", y:"70%", font_size:statContentSize, italic: true, w: '67%', valign: 'top', color:'000000' };
      this.slide.addText(statNum3, statNumPos3);
      this.slide.addText(statContent3, statContentPos3);
    }

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
