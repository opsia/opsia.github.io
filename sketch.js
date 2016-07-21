//20072016 
//camelCase
//Variables
// Para usar una variable, debemos declararla
//DECLARAR hace que el compu sepa que existe
var diametro;

//Solo depsues de declarar una variable
//podemos asignar un valor
diametro=100;

//Hay variables LOCALES y GLOBALES
//Las variables locales viven dentro de una función

//Las FUNCIONES también se DECLARAN
//function nombreFuncion();

function setup() {
  // createCanvas es Horizontal, Vertical
  createCanvas(600, 450);
  //BG en RGB
  background(0, 255, 0);
}

function draw() {
  background(0, 255, 0);

//Declarar variable LOCAL anchoBorde y asignarle de inmediato un valor
var anchoBorde = 5;
  
 estilo1();
  
    ellipse(200, 50, 30, 30);
    
    estilo2();
    ellipse(mouseX, mouseY, diametro, diametro);
    
}

//Declaracion de funcion de destilo de elipse
function estilo1(){
   //ellipse(posX, posY, width, height) siempre en px
  //Se ejecuta después de stup 60 veces por segundo
  //Los parametros de color y borde se escriben antes de la figura
  
  //Tamaño de borde (puede ser reemplazado por variable LOCAL)
  strokeWeight(10);
  
  //color del borde
  stroke(210, 0, 100);
  
  //Color del relleno
  fill(0, 200, 0);
}

function estilo2(){
   //ellipse(posX, posY, width, height) siempre en px
  //Se ejecuta después de stup 60 veces por segundo
  //Los parametros de color y borde se escriben antes de la figura
  
  //Tamaño de borde (puede ser reemplazado por variable LOCAL)
  strokeWeight(30);
  
  //color del borde
  stroke(210, 0, 100);
  
  //Color del relleno
  fill(0, 200, 0);
  diametro= diametro+0.2;


}