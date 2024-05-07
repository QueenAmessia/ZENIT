let grosorValue = 0;
let sliderGrosor;
let texto = "zenit"; // Variable para almacenar el texto
let pesoValue = 2;
let colorValue = 'pink';
let inclinacionValue = 0;

let pGrosor;

let myPicker;

let sliderEspacio;
let pEspacio;
let espacioValue = 0;

let sliderLigar;
let pLigar;
let ligarValue = 0;

let saveButton



let hideLetters = false; // Variable to control to hide the letters

function setup() {
  createCanvas(1920, 1080);

  //slider grosor
  sliderGrosor = createSlider(0, 30, 0);
  sliderGrosor.position(10, 440);
  sliderGrosor.addClass("grosor")
  
//slider kerning
sliderEspacio = createSlider(0, 50, 0);
sliderEspacio.position(10, 520);
sliderEspacio.addClass("espacio")

 //Slider Ligar
 sliderLigar = createSlider(0, 150, 0);
 sliderLigar.position(10, 595);
 sliderLigar.addClass ("ligar")


 saveButton = createButton('Guardar')
 saveButton.position(1000, 435)

 // Cuando se clickea ejecuta la funcion guardarTipo
 saveButton.mousePressed(guardarTipo)
 saveButton.addClass("guardar")

 myPicker = createColorPicker (color (26, 33, 58));
 myPicker.position(350, 435);
 myPicker.addClass ("picker")

  input = createInput();
  input.position(30, 435);
  input.changed(updateText); 
 
  input.style('width', '200px');
  input.style('height', '30px'); 
  input.style('border-radius', '20px'); 
  input.style('border', 'none'); 

  input.addClass ("texto")
}

function draw() {
  background(color(195,187,158));
  push()
  noStroke()
  
  if (!hideLetters) { // Only display the texts if hideLetters is false
    //info texto
    textSize(15);
    textFont('Montserrat');
    text("¡Escribí lo que quieras!", 45, 420);
    //info espacio
    text("Kerning", 550, 505);
    //info ligar
    text("Ligar", 560, 580);
    //info grosor
    text("Grosor", 555, 430);
  }
  pop()



//slider grosor
  grosorValue = sliderGrosor.value();
  strokeWeight(grosorValue);
  drawText(50, 100, texto, grosorValue);

  ligarValue = sliderLigar.value();

  //slider kerning
  espacioValue = sliderEspacio.value();


    // Get the color from the color picker
    let c = myPicker.color();
  
    // Draw the color string text with transparent stroke
    push();
    textFont ('Montserrat')
    stroke(0, 0); // Transparent stroke color
    text(c.toString('#rrggbb'), 350, 425);
    pop();

    stroke(c);
}

function drawText(x, y, texto, grosor) {
  let anchoLetra = 40; // Ancho de cada letra
  let espacioEntreLetras = 30; // Espacio entre cada letra

  
  
  // Dibujar cada letra del texto
  for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);

    let espacio = espacioValue * i; 
     // Adjust the x position based on the calculated space
     let xPos = x + i * (anchoLetra + espacioEntreLetras) + espacio;

     

    if (letra === 'a') {
      letterA(xPos + i * (anchoLetra + espacioEntreLetras), y -2, grosor, ligarValue);
    } else if (letra === 'b') {
      letterB(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'c') {
      letterC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'd') {
      letterD(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'e') {
      letterE(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'f') {
      letterF(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'g') {
      letterG(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'h') {
      letterH(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'i') {
      letterI(xPos + i * (anchoLetra +5  + espacioEntreLetras), y, grosor, ligarValue);       
    } else if (letra === 'j') {
      letterJ(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'k') {
      letterK(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'l') {
      letterL(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'm') {
      letterM(xPos + i * (anchoLetra  + espacioEntreLetras -2 ), y, grosor, ligarValue);
    } else if (letra === 'n') {
      letterN(xPos + i * (anchoLetra + espacioEntreLetras - 2), y +5, grosor, ligarValue);
    } else if (letra === 'o') {
      letterO(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'p') {
      letterP(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'q') {
      letterQ(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'r') {
      letterR(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 's') {
      letterS(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 't') {
      letterT(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'u') {
      letterU(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'v') {
      letterV(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'w') {
      letterW(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'x') {
      letterX(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'y') {
      letterY(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'z') {
      letterZ(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor, ligarValue);
    } else if (letra === 'A') {
      letterAC(xPos + i * (anchoLetra + espacioEntreLetras), y , grosor);
    } else if (letra === 'B') {
      letterBC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'C') {
      letterCC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'D') {
      letterDC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'E') {
      letterEC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'F') {
      letterFC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'G') {
      letterGC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'H') {
      letterHC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'I') {
      letterI(xPos  + i * (anchoLetra + espacioEntreLetras) , y, grosor);
    } else if (letra === 'J') {
      letterJC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'K') {
      letterKC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'L') {
      letterLC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'M') {
      letterMC(xPos + i * (anchoLetra + espacioEntreLetras ), y, grosor);
    } else if (letra === 'N') {
      letterNC(xPos + i * (anchoLetra + espacioEntreLetras - 2), y +5, grosor);
    } else if (letra === 'O') {
      letterOC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'P') {
      letterPC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'Q') {
      letterQC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'R') {
      letterRC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'S') {
      letterSC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'T') {
      letterT(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'U') {
      letterUC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'V') {
      letterVC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'W') {
      letterWC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'X') {
      letterXC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'Y') {
      letterYC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    } else if (letra === 'Z') {
      letterZC(xPos + i * (anchoLetra + espacioEntreLetras), y, grosor);
    }
  }
}


function updateText() {
  // Actualizar el valor del texto cuando cambia el input
  texto = this.value();
}

function guardarTipo() {
  let lienzoTexto = get(0, 0, 1500, 300);
  lienzoTexto.save('zenit', 'jpg');
}