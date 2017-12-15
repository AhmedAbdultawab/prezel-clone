var pptx = require('pptxgenjs');

class AgendaSlide {
  constructor(pres, title, list, color, colorLight, temp) {
    this.title = title;
    this.color = color;
    this.colorLight = colorLight;
    this.agendaList = list;
    this.template = temp;
    this.slide= pptx.addNewSlide();
    this.generateSlide()
  }
  generateSlide() {
  //pull template from the template from here to inteact with this model
    var titleSize = this.template.header.size
    var titleFont = this.template.header.font
    var contentSize = this.template.content.size
    var yCoord = 22;
    console.log(this.agendaList);
    for (var i = 0; i < this.agendaList.length; i++) {
        //console.log(this.agendaList[i]);
        //console.log(yCoord.toString()+"%");
        this.slide.addText(this.agendaList[i], { x:"8%", y: yCoord.toString()+"%", font_size:contentSize, bullet: true, color: "000000" });
        yCoord += 8;
    }
   // var template = null //call to template
    var titlePos = { x:"30%", y:"80%", font_size:titleSize, bold: true, color:this.colorLight };
    this.slide.addText(this.title, titlePos)
    //var agendaPos = { x:"10%", y:"25%", font_size:contentSize, color:this.color };
    //this.slide.addText(this.agendaList[0], agendaPos)


   }

 };

module.exports = AgendaSlide;

 /*
 var genSlide = pptx.addNewSlide();
 var genTitle = slideObject.topic_title;
 var genSubtopic = slideObject.subtopics.name;
 var genList = slideObject.text_content[0].split(",").slice(0,5);
 var primaryColor = '000000';
 var secondaryColor = '009900';
 var Ycoord = 1.8;
 var spaceBtwn = 4 / genList.length ; // calculates space between elements based on their number (max 5)
 for (var i = 0; i < genList.length; i++)
 {
   genSlide.addText(genList[i], { x:1.0, y: Ycoord, font_size:12, color: primaryColor });
   Ycoord += spaceBtwn;
 }
 var position1 = { x:1.0, y:0.5, font_size:40, color: primaryColor };
 var position2 = { x:1.0, y:1.2, font_size:30, color: secondaryColor };
 genSlide.addText(genTitle,position1);
 genSlide.addText(genSubtopic, position2); */
