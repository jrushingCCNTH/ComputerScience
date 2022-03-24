let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;
let button9;
let button10;
let button11;
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
let img2;
let img;
let img4;
let img3;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let white;
let Blocks =[]
let Images =[]
let maxBlocks = 16
let Sound;
let index;
function preload(){
  Images[2] = loadImage('Minecraft-Stone-Block-600x600.jpg')
  Images[0] =loadImage('Dirt_(texture)_JE1_BE1.png')
  Images[4] =loadImage('JER.jpg')
  Images[3] = loadImage('Minecraft-Iron-Ore.jpg')
  Images[5] = loadImage('75f14e567f14471.png')
  Images[6] = loadImage('SAND.jpeg')
  Images[7] = loadImage('SNow.png')
  Images[8] = loadImage('NUMBER 9.jpg')
  Images[9] = loadImage('block.png')
  Images[10] = loadImage('Obsidian-Block.png')
  Images[11] = loadImage('----.png')
  Images[1] = loadImage('SpiderWeb.png')
  white = loadImage('Image white.png')
 // Sound = loadSound('mine Craftes.html')
}
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
  button6.position(205,400)
  button7 = createButton('Equip axe')
  button7.position(120,400)
  button8 = createButton('Equip pick')
  button8.position(120,420)
  button8 = createButton('Equip sword')
  button8.position(120,440)
  button9 = createButton('Equip shovel')
  button9.position(120,460)
  button10 = createButton('Equip shears')
  button10.position(120,480)
  button11 = createButton('Upgrade to Auto-Equip')
  button11.position(205,420)
  {
  index = random (12);
  Blocks[0] = {x:400, y:0, h:100, Image:Images[index]}
  Blocks[2] = {x:400, y:0, h:100, Image:white}
  Blocks[3] = {x:400, y:0, h:100, Image:white}
  Blocks[4] = {x: 400, y:0, h:100,Image:white}
  Blocks[5] = {x:400, y:0, h:100, Image:white}
  Blocks[6] = {x:400, y:0, h:100, Image:white}
  Blocks[7] = {x:400, y:0, h:100, Image:white}
  Blocks[8] = {x:400, y:0, h:100, Image:white}
  Blocks[9] = {x:400, y:0, h:100, Image:white}
  Blocks[10] = {x:400, y:0, h:100,Image:white}
  Blocks[11] = {x:400, y:0, h:100,Image:white}
  Blocks[12] = {x:400, y:0, h:100, Image:white}
  Blocks[13] = {x:400, y:0, h:100, Image:white}
  Blocks[14] = {x:400, y:0, h:100, Image:white}
  }  

}
function draw(){
  background(225);
  fill('white')
  square(400,0,100);
  square(300,0,100);
  square(200,0,100);
  square(100,0,100);
  square(400,100,100);
  square(300,100,100);
  square(200,100,100);
  square(100,100,100);
  square(400,200,100);
  square(300,200,100);
  square(200,200,100);
  square(100,200,100);
  square(400,300,100);
  square(300,300,100);
  square(200,300,100);
  square(100,300,100);
  fill('black')
  image(Blocks[1].Image,100,100,100,100)
  image(Blocks[0].Image,100,0,100,100)
  image(Blocks[3].Image,100,300,100,100)
  image(Blocks[2].Image,100,200,100,100)
  image(Blocks[4].Image,200,0,100,100)
  image(Blocks[5].Image, 200,100,100,100)
  image(Blocks[6].Image, 200,200,100,100)
  image(Blocks[7].Image,200,300,100,100)
  image(Blocks[8].Image,300,0,100,100)
  image(Blocks[9].Image,300,100,100,100)
  image(Blocks[10].Image,300,200,100,100)
  image(Blocks[11].Image,300,300,100,100)
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
shovelPowerName="Netherite"             //endshovel
}
  button5.mousePressed(shearUp)
  text("Shears: "+shearPowerName,4,92)
  if(shearPower===0){
    shearPowerName="None"
  }
  if(shearPower===1){
    shearPowerName="Yes"
  }                              //endshears
  text("EXP: "+clicks,4,112)
  text("Blocks: "+blocks,4,132)
  fill('lime')
  if(clicks>=(10*(axePower+1))){
  rect(0,395,100,30)              //FIXXXXXXXXXX
}
  if(clicks>=(10*(pickPower+1))){
  rect(0,415,102,30)
}
  if(clicks>=(10*(swordPower+1))){
  rect(0,435,114,30)
}
  if(clicks>=(10*(shovelPower+1))){
  rect(0,455,117,30)
}
  if(clicks>=(10*(shearPower+1))){
  rect(0,475,118,30)
}
  if(clicks>=(10*blocks)){
    rect(202,400,118,25)
  }
}
function blocksUp(){
  if(clicks>=10*(blocks)){
    blocks++
  clicks-=(10*(blocks-1))
  }
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
  shearPower++
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

function mouseClick(){
Blocks[0] = {x:400, y:0, w:100, l: 100, img}
Blocks[2] = {x:400, y:0, w:100, l:100, img2}
Blocks[3] = {x:400, y:0, w:100, l:100, img3}
Blocks[4] = {x:400, y:0, w:100, l:100, img4}
Blocks[5] = {x:400, y:0, w:100, l:100, img5}
Blocks[6] = {x:400, y:0, w:100, l: 100, img6}
Blocks[7] = {x:400, y:0, w:100, l: 100, img7}
Blocks[8] = {x:400, y:0, w:100, l: 100, img8}
Blocks[9] = {x:400, y:0, w:100, l: 100, img9}
Blocks[10] = {x:400, y:0, w:100, l: 100, img10}
Blocks[11] = {x:400, y:0, w:100, l: 100, img11}
Blocks[12] = {x:400, y:0, w:100, l: 100, img12}
Blocks[13] = {x:400, y:0, w:100, l: 100, img13}
Blocks[14] ={x:400, y:0, w:100, l: 100, img14}
}
