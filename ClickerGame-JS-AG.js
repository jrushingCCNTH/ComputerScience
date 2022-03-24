let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let axePower=0;
let axePowerName="None"
let pickPower=0;
let pickPowerName="None"
let swordPower=0;
let swordPowerName="None"
let shovelPower=0;
let shovelPowerName="None"
let shearPower=0;
let shearPowerName="None"
let blocks=1;
let clicks=0;
function setup() {
  createCanvas(500,500);
  background(225);
  button1 = createButton('Upgrade axe')
  button1.position(0,400)
  button2 = createButton('Upgrade pick')
  button2.position(0,420)
  button3 = createButton('Upgrade sword')
  button3.position(0,440)
  button4 = createButton('Upgrade shovel')
  button4.position(0,460)
  button5 = createButton('Upgrade shears')
  button5.position(0,480)
  button6 = createButton('Upgrade blocks')
  button6.position(220,400);
  button7 = createButton('Auto clicker')
  button7.position(220,420)
}
function draw(){
  background(225);
  square(400,0,100);
  square(300,0,100)
  square(200,0,100)
  square(100,0,100)
  square(400,100,100);
  square(300,100,100)
  square(200,100,100)
  square(100,100,100)
  square(400,200,100);
  square(300,200,100)
  square(200,200,100)
  square(100,200,100)
  square(400,300,100);
  square(300,300,100)
  square(200,300,100)
  square(100,300,100)
  button6.mousePressed(blocksUp)
  button1.mousePressed(axeUp)
  text("Axe: "+axePowerName,4,12)
  if(axePower===0){
    axePowerName="None"
  }
  if(axePower===1){
    axePowerName="Wood"
  }                              //endaxe
  if(axePower===2){
    axePowerName="Stone"
  }
  if(axePower===3){
    axePowerName="Iron"
  }
  if(axePower===4){
    axePowerName="Diamond"
  }
  if(axePower===5){
    axePowerName="Netherite"
  }
  button2.mousePressed(pickUp)
  text("Pick: "+pickPowerName,4,32)
  if(pickPower===0){
    pickPowerName="None"
  }
  if(pickPower===1){
    pickPowerName="Wood"
  }                              //endpick
if(pickPower===2){
    pickPowerName="Stone"
  }
  if(pickPower===3){
    pickPowerName="Iron"
  }
  if(pickPower===4){
    pickPowerName="Diamond"
  }
  if(pickPower===5){
    pickPowerName="Netherite"
  }
  button3.mousePressed(swordUp)
  text("Sword: "+swordPowerName,4,52)
  if(swordPower===0){
    swordPowerName="None"
  }
  if(swordPower===1){
    swordPowerName="Wood"
  }                              //endsword
  if(swordPower===2){
swordPowerName="Stone"
}
if(swordPower===3){
swordPowerName="Iron"
}
if(swordPower===4){
  swordPowerName="Diamond"
}
if(swordPower===5){
swordPowerName="Netherite"
}
  button4.mousePressed(shovelUp)
  text("Shovel: "+shovelPowerName,4,72)
  if(shovelPower===0){
    shovelPowerName="None"
  }
  if(shovelPower===1){
    shovelPowerName="Wood"
  }                            
  if(shovelPower===2){
  shovelPowerName="Stone"
  }
if(shovelPower===3){
shovelPowerName="Iron"
}
if(shovelPower===4){
shovelPowerName="Diamond"
}
if(shovelPower===5){
shovelPowerName="Netherite"                                 //endshovel
}
   button5.mousePressed(shearUp)
  text("Shears: "+shearPowerName,4,92)
  if(shearPower===0){
    shearPowerName="None"
  }
  if(shearPower===1){
    shearPowerName="Yes"
  }                              //endshears
text("Clicks: "+clicks,4,112)
text(“Blocks: “+blocks,4,132)
}
function blocksUp(){
  blocks++
}
function axeUp(){
  if(clicks>=10*(axePower+1)){
     axePower++
  clicks-=(10*axePower)
  }
}
function pickUp(){
  if(clicks>=10*(pickPower+1)){
      pickPower++
  clicks-=(10*pickPower)
  }
}
function swordUp(){
  if(clicks>=10*(swordPower+1)){
    swordPower++
  clicks-=(10*swordPower)
  } 
}
function shovelUp(){
  if(clicks>=10*(shovelPower+1)){
      shovelPower++
  clicks-=(10*shovelPower)
  }
}
function shearUp(){
  if(clicks>=10){
     shearPower++
  clicks-=10
  }
}
function mousePressed(){
  if(blocks>=1){
  if(mouseX>=100 && mouseX<=200 && mouseY<=100){
    clicks++
  }
}
  if(blocks>=2){
  if(mouseX>=200 && mouseX<=300 && mouseY<=100){
    clicks++
  }
  }
  if(blocks>=3){
  if(mouseX>=300 && mouseX<=400 && mouseY<=100){
    clicks++
  }
  }
  if(blocks>=4){
  if(mouseX>=400 && mouseX<=500 && mouseY<=100){
    clicks++
  }
  }
  if(blocks>=5){
  if(mouseX>=100 && mouseX<=200 && mouseY<=200 && mouseY>=100){
    clicks++
  }
  }
  if(blocks>=6){
  if(mouseX>=200 && mouseX<=300 && mouseY<=200 && mouseY>=100){
    clicks++
  }
  }
  if(blocks>=7){
  if(mouseX>=300 && mouseX<=400 && mouseY<=200 && mouseY>=100){
    clicks++
  }
  }
  if(blocks>=8){
  if(mouseX>=400 && mouseX<=500 && mouseY<=200 && mouseY>=100){
    clicks++
  }
  }
  if(blocks>=9){
  if(mouseX>=100 && mouseX<=200 && mouseY<=300 && mouseY>=200){
    clicks++
  }
  }
  if(blocks>=10){
  if(mouseX>=200 && mouseX<=300 && mouseY<=300 && mouseY>=200){
    clicks++
  }
  }
  if(blocks>=11){
  if(mouseX>=300 && mouseX<=400 && mouseY<=300 && mouseY>=200){
    clicks++
  }
  }
  if(blocks>=12){
  if(mouseX>=400 && mouseX<=500 && mouseY<=300 && mouseY>=200){
    clicks++
  }
  }
  if(blocks>=13){
  if(mouseX>=100 && mouseX<=200 && mouseY<=400 && mouseY>=300){
    clicks++
  }
  }
  if(blocks>=14){
  if(mouseX>=200 && mouseX<=300 && mouseY<=400 && mouseY>=300){
    clicks++
  }
  }
  if(blocks>=15){
  if(mouseX>=300 && mouseX<=400 && mouseY<=400 && mouseY>=300){
    clicks++
  }
  }
  if(blocks>=16){
  if(mouseX>=400 && mouseX<=500 && mouseY<=400 && mouseY>=300){
    clicks++
  }
  }
}



