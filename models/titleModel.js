class TitleSlide {
  constructor(pptx, title, authors, templateID) {
    this.title = title;
    this.authors = authors;
    this.slide= pptx.addNewSlide();
    this.generateSlide()
  }
  generateSlide() {
  //pull template from the template from here to inteact with this model
    var template = null //call to template
    var titlePos = { x:1.0, y:0.5, font_size:42, color:'00FF00' };
    this.slide.addText("title", titlePos)
    this.slide.addText("title", authors)

   }

 };
module.exports = TitleSlide;
