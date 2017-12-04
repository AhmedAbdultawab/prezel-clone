class TitleSlide {
  constructor(pptx, title, authors, template) {
    this.title = title;
    this.authors = authors;
    //console.log(temp)
    this.template = template;
    this.slide= pptx.addNewSlide();
    this.generateSlide()
  }
  generateSlide() {
    // postiton Title Name
    console.log("inside title slide")
    console.log(this)
  //  var titlePos = { x:1.0, y:0.5, font_size: this.template.header.size , font: this.template.header.font, color:'00FF00' };
    //this.slide.addText(this.title, titlePos)
    // Position Authors
  //  var authorPos = { x:1.0, y:0.75, font_size: this.template.subheader.size , font: this.template.subheader.font, color:'00FF00' };
  //  this.slide.addText(this.title, authorPos)
   // Room to implement API to pull a picture here based on title name

   }

 };
module.exports = TitleSlide;
