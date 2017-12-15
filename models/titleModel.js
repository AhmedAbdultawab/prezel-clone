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
    var titleSize = this.template.title.size
    var titleFont = this.template.title.font
    console.log(color);
    console.log(titleSize);
    console.log(titleFont);
    var titlePos = { x:"51%", y:"65%", font_size: titleSize , font: titleFont, bold: true, color:"FFFFFF" };
    this.slide.addText(this.title, titlePos)
    // Position Authors
    var authorSize = this.template.subheader.size
    var authorFont = this.template.subheader.font
    var authorPos = { x:"50%", y:"85%", font_size: authorSize , font: authorFont, color:"E8E8E8" };
    this.slide.addText(this.authors, authorPos)
    this.slide.back = this.color;
   // Room to implement API to pull a picture here based on title name

   }

 };
module.exports = TitleSlide;
