class TitleSlide {
  constructor(pptx, title, authors, color, template) {
    this.title = title;
    this.authors = authors;
    this.color = color;
    this.template = template;
    this.slide= pptx.addNewSlide();
    this.generateSlide()
  }
  generateSlide() {
    // postiton Title Name
    console.log("inside title slide")
    //console.log(this)
    var titleSize = this.template.header.size
    var titelFont = this.template.header.font
    console.log(color);
    var titlePos = { x:"35%", y:"30%", font_size: titleSize , font: titelFont, color:this.color };
    this.slide.addText(this.title, titlePos)
    // Position Authors
    var authorSize = this.template.subheader.size
    var authorFont = this.template.subheader.font
    var authorPos = { x:"45%", y:"60%", font_size: authorSize , font: authorFont, color:this.color };
    this.slide.addText(this.authors, authorPos)
   // Room to implement API to pull a picture here based on title name

   }

 };
module.exports = TitleSlide;
