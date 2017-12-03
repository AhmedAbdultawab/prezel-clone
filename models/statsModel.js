var pptx = require('pptxgenjs');
class StatsSlide {
  constructor(pres, title, stats, temp) {
    this.title = title;
    this.stats = stats;
    this.slide= pptx.addNewSlide();
    this.generateSlide();
  }
  generateSlide() {
  //pull template from the template from here to inteact with this model
    var template = null //call to template
    var titlePos = { x:1.0, y:0.5, font_size:42, color:'00FF00' };
    this.slide.addText("stats", titlePos)
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
