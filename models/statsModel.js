class StatsSlide {
  constructor(title, stats, content, templateID) {
    this.title = title;
    this.stats = stats;
    this.content = content;
    this.slide= pptx.addNewSlide();
    this.generateSlide();
  }
  generateSlide() {
  //pull template from the template from here to inteact with this model
    var template = null //call to template
    var titlePos = { x:1.0, y:0.5, font_size:42, color:'00FF00' };
    this.slide.addText(this.title, titlePos)
  //need some loop to get stat.content combo, and place it
    for (i = 0; i < this.stats.length; i++)  {
      var s = this.stats[i]
      var c = this.content[i]
      var sPos = { x:3.0, y:4.5, font_size:20, color:'00FF00' };
      var cPos = { x:3.0, y:4.5, font_size:20, color:'00FF00' };
      this.slide.addText(s, sPos)
      this.slide.addText(c, cPos)
    }
   }

 };

module.exports = StatsSlide;
