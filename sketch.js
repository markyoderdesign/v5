let backgroundImg = [];
let backgroundIndex = 0;

let layeringImg = [];
let layeringIndex = 0;

let sx;
let sy;
let sw;
let sh;

let dx;
let dy;
let dw;
let dh;

let t;
let k;

let slider1;
let slider2;

let button
let savePic

var Lwidth;
var Lheight;
let randImg;

let randImg2;

let msgX=0;
let msgY=0;

var px = 3.57142857143;

const urlParams = new URLSearchParams(location.search);



function getQueryStringValue (value) {  
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(value).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}  

function setup() {

  msg = createP('Width');
  msg.position(msgX+24,msgY+362);
  msg.style('position', 'fixed');


  msg2 = createP('Height');
  msg2.position(msgX+24,msgY+413);
  msg2.style('position', 'fixed');

  msg3 = createP('Save');
  msg3.position(msgX+75,msgY+480);
  msg3.style('position', 'fixed');




  let q = 0;
  for (const value of urlParams.values()) {
    if(q == 0)
    {
      img = loadImage("clothes2/" + value + ".png");

    }
    q = 1;

      
    }

  var cnv = createCanvas(840, 560);

  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;

  cnv.position(x+100, y-20);

  cnv.style('position','fixed')


  cnv.mousePressed(generate);


    t=img.width/px
    k=img.height/px


  layer1 = createGraphics(img.width, img.height);
  slider1 = createSlider(50, 560, 100);
  slider1.position(75, 375);
  slider1.style('width', '120px');
  slider1.style('position', 'fixed');


  slider2 = createSlider(50,560, 100);
  slider2.position(75, 425);
  slider2.style('width', '120px');
  slider2.style('position', 'fixed');

  button = createImg('save.png');

  button.position(23, 485);
  button.mousePressed(saveCanvas);
  button.style('position','fixed')


}

function resetSketch (){
  layer1 = createGraphics(img.width, img.height);
}


  function preload() {  
    


    for (const value of urlParams.values()) {


    backgroundImg.push(loadImage("clothes2/" + value + ".png"));
    layeringImg.push(loadImage("clothes2/" + value + ".png"));


      
    }
    
  }


  

  function generate() {


    let Lheight = img.height/px;
    let Lwidth = img.width/px;

    resetSketch();
    background(255);


    let randImg = random(backgroundImg);
    image(randImg, 0, 0, Lwidth, Lheight);

    for (let i = 0; i < layeringImg.length; i++) {


    sx = int(random(0, Lwidth));
    sy = int(random(0, Lheight));
    sw = int(random(0, slider1.value()));
    sh = int(random(0, slider2.value()));

    dx = sx
    dy = sy
    dw = sw
    dh = sh


      let randImg2 = random(layeringImg);

      rotate(randImg2);



      randImg2.resize(Lwidth, Lheight);

      image(randImg2, sx, sy, sw, sh, dx, dy, dw, dh);
    }


  }
  
  
