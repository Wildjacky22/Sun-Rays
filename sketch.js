var c1;
var c2;
var c3;
var r;
var g;
var b;
var dd = 5;

function setup() {
 createCanvas( windowWidth , windowHeight );

 var M = round(windowHeight/dd);
  var N = round(windowWidth/dd);
       
    dx = windowWidth/N;
    dy = windowHeight/M;


  for( a = 0 ; a < M ; a++ ){
    for( i = 0 ; i < N ; i++ ) {
 
  
  c1 = color( 28 , 75 , 204 );
  c2 = color( 58 , 175 , 81 );
  
  c3 = lerpColor( c1 , c2 , a/M );

  
  fill( c3 );
    rect( dx/2 +i*dx , dy/2 +a*dy , dx , dy );
   
   stroke( c3 );
   }
  }
}

function draw() {
ellipse( 0 , 0 ,250 , 250 );
  fill( 251 , 255 , 35 );
  
 var r =random( 251 , 253 );
 var g =random( 255 , 255 );
 var b =random( 35 , 135 );
  stroke( r , g , b , 35 );
  line( 0 , 0 , mouseX , mouseY );
  
  
  
  
}
