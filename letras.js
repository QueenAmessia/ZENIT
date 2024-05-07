function setup() {
  // Código inicial. Se ejecuta una sola vez
  createCanvas(1920, 1080);

}

function draw() {
  // Se ejecuta después de setup conitnuamente

  
}


function letterA(x,y,grosor,ligar) {
push ()
translate(x, y);
strokeWeight(4 + grosor);
noFill();
beginShape();
vertex(8.8,63.66);
vertex(8.8,20.3);
bezierVertex(8.8,17.51,9.57,14.75,11.1,12.5);
bezierVertex(16.55,3.8,25.5,4.4,35.12,3.6);
bezierVertex(45.01,3.8,54,2,59.39,12.5);
bezierVertex(60.99,14.7,61.76,17.51,61.76,20.3);
vertex(61.76,63.66);
endShape()

beginShape();
vertex(79.76+ligar,34.46);
vertex(0-ligar,34.48);
endShape()

pop()
}

function letterB(x,y,grosor,ligar) {
  push ()
  translate(x, y)
  strokeWeight(4 + grosor);
  noFill();
  beginShape();
vertex(44.48,33.3);
bezierVertex(52.279999999999994,33.3,58.589999999999996,39.169999999999995,58.589999999999996,46.41);
vertex(58.589999999999996,51);
bezierVertex(58.589999999999996,58.24,51.989999999999995,64.11,44.199999999999996,64.11);
vertex(9.46,64.11);
bezierVertex(5.610000000000001,64.11,2.500000000000001,61.21,2.500000000000001,57.64);
vertex(2.500000000000001,33.3);
bezierVertex(2.500000000000001,33.3,2.500000000000001,8.969999999999999,2.500000000000001,8.969999999999999);
bezierVertex(2.500000000000001,5.399999999999999,5.620000000000001,2.499999999999999,9.46,2.499999999999999);
vertex(44.19,2.499999999999999);
bezierVertex(51.989999999999995,2.499999999999999,58.58,8.37,58.58,15.61);
vertex(58.58,20.2);
bezierVertex(58.58,27.439999999999998,52.26,33.31,44.47,33.31);
vertex(17.89,33.31);
vertex(44.47,33.31);
endShape();
pop ()
}


function letterC(x,y,grosor,ligar) {
push ()
translate(x, y);
strokeWeight(4 + grosor);
noFill();
beginShape();
vertex(47.86+ligar,2.5);
vertex(30,2.5);
bezierVertex(14.81,2.5,2.5100000000000016,14.81,2.5100000000000016,29.99);
vertex(2.5100000000000016,35.76);
bezierVertex(2.5100000000000016,50.949999999999996,14.820000000000002,63.25,30,63.25);
vertex(47.86+ligar,63.25);
endShape()
 pop()
  }


function letterD(x,y,grosor,ligar) {
push ()
translate(x , y);
strokeWeight(4 + grosor);
noFill();
beginShape();
vertex(2.5,63.07);
vertex(2.5,2.99);
bezierVertex(2.5,2.72,2.74,2.5,3.0300000000000002,2.5);
vertex(44.480000000000004,2.5);
bezierVertex(52.28,2.5,58.59,8.370000000000001,58.59,15.61);
vertex(58.59,15.61);
vertex(58.59,50.64);
bezierVertex(58.59,57.91,52.230000000000004,63.79,44.410000000000004,63.75);
vertex(3.030000000000001,63.56);
bezierVertex(2.740000000000001,63.56,2.510000000000001,63.34,2.510000000000001,63.07);
endShape();
pop()

    }

    
function letterE (x,y,grosor, ligar) {
  //inicio encapsulamiento
  push()

//posicion
translate(x , y);
strokeWeight(4 + grosor);
noFill();
beginShape();
vertex(59.91 +ligar,63.75);
vertex(24.93,63.59);
bezierVertex(21.1,63.57,18 ,60.68000000000001,18,57.120000000000005);
vertex(18,8.97);
bezierVertex(18,5.4,21.12,2.500000000000001,24.96,2.500000000000001);
vertex(59.97+ligar,2.500000000000001);
endShape()

beginShape();
vertex(0,33.14);
vertex(56.77,33.14);
endShape()

//final encapsulamiento
pop()
  
}


function letterF(x,y,grosor,ligar) {
push ()
translate(x, y)
strokeWeight(4 + grosor);
noFill();
beginShape();
vertex(14.8,64.13);
vertex(14.8,8.97);
bezierVertex(14.8,5.4,17.92,2.500000000000001,21.76,2.500000000000001);
vertex(56.769999999999996+ligar,2.500000000000001);
endShape()

beginShape();
vertex(0-ligar,33.14);
vertex(56.77+ligar,33.14);
endShape()
pop()
  }


function letterG(x,y,grosor,ligar) {
push ();
translate(x, y);
strokeWeight(4 + grosor);
noFill();
beginShape();
vertex(25.18,32.88);
vertex(49.8,32.88);
bezierVertex(52.72,32.88,55.089999999999996,35.25,55.089999999999996,38.17);
vertex(55.089999999999996,57.980000000000004);
bezierVertex(55.089999999999996,60.900000000000006,52.72,63.27,49.8,63.27);
vertex(29.999999999999996,63.27);
bezierVertex(14.809999999999997,63.27,2.509999999999998,50.96,2.509999999999998,35.78);
vertex(2.509999999999998,30.01);
bezierVertex(2.509999999999998,14.820000000000002,14.819999999999999,2.520000000000003,29.999999999999996,2.520000000000003);
vertex(55.089999999999996,2.520000000000003);
endShape()
pop()
}


function letterH(x,y,grosor,ligar) {
  push ();
  translate(x, y);
  strokeWeight(4 + grosor);
  noFill();
  beginShape();
  vertex(55.47,2.3);
  vertex(55.47,63.93);
  endShape()

  beginShape();
  vertex(2.5,63.93);
  vertex(2.5,2.3);
  endShape()

  beginShape();
  vertex(73.46+ligar,32.73);
  vertex(2.5,32.75);
  endShape()
  pop()

      }


function letterI(x,y,grosor, ligar) {
    //inicio encapsulamiento
    push()

    //posicion
   translate(x, y,ligar)
   strokeWeight(4 + grosor);
   noFill();
   beginShape();
   vertex(20.02,3.9);
   vertex(20.02,64.17);
   endShape()
   beginShape();
   vertex(0 - ligar,2.6);
   vertex(38.03 + ligar,2.6 );
   endShape()
   beginShape();
   vertex(0 - ligar,63.92);
   vertex(38.03 + ligar,63.89);
   endShape()
   
    
  //final encapsulamiento
pop()
}

function letterJ(x,y,grosor,ligar) {
  push ()
  translate(x, y)
  strokeWeight(4 + grosor);
  noFill();
  beginShape();
  vertex(46.31,2.5);
vertex(46.31,38.79);
bezierVertex(46.31,52.5,35.2,63.61,21.490000000000002,63.61);
vertex(0,63.61);
endShape()
pop()
  }


  function letterK(x,y,grosor,ligar) {
    push ()
    translate(x, y)
    strokeWeight(4 + grosor);
    noFill();
    beginShape();
    vertex(2.5,63.35);
vertex(2.5,33.16);
vertex(2.5,33.18);
vertex(2.5,2.3);
endShape()

beginShape();
vertex(55.8,63.54);
vertex(55.8,46.290000000000006);
bezierVertex(55.8,39.050000000000004,49.62,33.18000000000001,41.81999999999999,33.18000000000001);
vertex(41.81999999999999,33.18000000000001);
bezierVertex(49.61999999999999,33.18000000000001,55.8,27.490000000000006,55.8,20.250000000000007);
vertex(55.8,2.3);
endShape()

beginShape();
vertex(2.5,33.17);
vertex(41.82,33.17);
endShape()
pop()
    }


    function letterL(x,y,grosor,ligar) {
      push ()
      translate(x, y)
      strokeWeight(4 + grosor);
      noFill();
      beginShape();
    vertex(2.5,2.3);
vertex(2.5,51.12);
bezierVertex(2.5,58.129999999999995,8.82,63.809999999999995,16.61,63.809999999999995);
vertex(52.7+ligar,63.809999999999995);
endShape()
pop()
      }


      function letterM(x,y,grosor,ligar) {
        push ()
        translate(x, y)
        strokeWeight(4 + grosor);
        noFill();
        beginShape();
        vertex(87.47,63.95);
vertex(87.47,18.22);
bezierVertex(87.47,9.6,80.4,2.4999999999999982,71.82,2.4999999999999982);
bezierVertex(63.23999999999998,2.4999999999999982,56.169999999999995,9.599999999999998,56.169999999999995,18.22);
vertex(56.169999999999995,31.189999999999998);
bezierVertex(56.169999999999995,34.239999999999995,56.169999999999995,37.29,56.169999999999995,40.33);
bezierVertex(56.169999999999995,44.4,56.56999999999999,48.769999999999996,54.28999999999999,52.37);
bezierVertex(52.169999999999995,55.699999999999996,48.18999999999999,58.25,44.129999999999995,57.83);
bezierVertex(40.07,57.41,36.58,54.54,34.91,50.93);
bezierVertex(33.61,48.12,33.809999999999995,45.19,33.809999999999995,42.19);
vertex(33.809999999999995,18.209999999999997);
bezierVertex(33.809999999999995,9.589999999999998,26.739999999999995,2.4899999999999967,18.159999999999997,2.4899999999999967);
bezierVertex(9.579999999999998,2.4899999999999967,2.5,9.6,2.5,18.22);
vertex(2.5,63.94999999999999);
endShape()
pop()
        }


function letterN (x,y,grosor) {
    //inicio encapsulamiento
    push()

        //posicion
   translate(x,y)
beginShape();
strokeWeight(4 + grosor);
noFill();
vertex(70.02,-2.8);
bezierVertex(70.02,4.130000000000001,70.02,35.89,70.02,43.93);
bezierVertex(70.02,52.62,63.8,58.76,56.25,58.76);
bezierVertex(45.7,59.76,42.480000000000004,52.61,42.480000000000004,43.93);
bezierVertex(42.480000000000004,33.879999999999995,42.480000000000004,22.419999999999998,42.480000000000004,14.370000000000001);
bezierVertex(42.480000000000004,5.6800000000000015,36.260000000000005,-1.459999999999999,28.710000000000004,-1.459999999999999);
bezierVertex(21.160000000000004,-1.459999999999999,14.94,5.69,14.94,14.37);
vertex(14.94,59.1);
endShape()

  //final encapsulamiento
  pop()

}


function letterO(x,y,grosor,ligar) {
  push ()
  translate(x, y)
  strokeWeight(4 + grosor);
  noFill();
  beginShape();
  vertex(31.43,63.6);
vertex(17.13,63.66999999999999);
bezierVertex(9.059999999999999,63.71,2.4999999999999982,59.639999999999986,2.4999999999999982,52.14999999999999);
vertex(2.4999999999999982,16.02);
bezierVertex(2.4999999999999982,8.55,9.019999999999998,2.5,17.06,2.5);
vertex(31.43,2.5);
bezierVertex(31.43,2.5,45.8,2.5,45.8,2.5);
bezierVertex(53.839999999999996,2.5,60.36,8.55,60.36,16.02);
vertex(60.36,16.02);
vertex(60.36,52.150000000000006);
bezierVertex(60.36,59.64000000000001,53.8,63.71000000000001,45.73,63.67);
vertex(31.429999999999996,63.60000000000001);
endShape();
pop()
  }

function letterP(x,y,grosor,ligar) {
    push ()
    translate(x, y)
    strokeWeight(4 + grosor);
    noFill();
    beginShape();
    beginShape();
vertex(2.5,66.09);
vertex(2.5,8.95);
bezierVertex(2.5,5.389999999999999,5.62,2.499999999999999,9.46,2.499999999999999);
vertex(44.47,2.499999999999999);
bezierVertex(52.269999999999996,2.499999999999999,58.58,8.36,58.58,15.579999999999998);
vertex(58.58,20.209999999999997);
bezierVertex(58.58,27.429999999999996,53.51,33.29,45.72,33.29);
vertex(2.5,33.29);
endShape()
pop()
    }


function letterQ(x,y,grosor,ligar) {
      push ()
      translate(x, y)
      strokeWeight(4 + grosor);
      noFill();
      beginShape();
      beginShape();
vertex(31.43,63.6);
vertex(17.13,63.66999999999999);
bezierVertex(9.059999999999999,63.71,2.4999999999999982,62.9999999999986,2.4999999999999982,50.14999999999999);
vertex(2.4999999999999982,16.02);
bezierVertex(2.4999999999999982,8.55,9.019999999999998,2.5,17.06,2.5);
vertex(31.43,2.5);
bezierVertex(31.43,2.5,45.8,2.5,45.8,2.5);
bezierVertex(53.839999999999996,2.5,60.36,8.55,60.36,16.02);
vertex(60.36,16.02);
vertex(60.36,52.150000000000006);
bezierVertex(60.36,63.64000000000001,53.8,63.71000000000001,45.73,63.67);
vertex(31.429999999999996,63.60000000000001);
endShape();

beginShape();
vertex(30.38,33.25);
vertex(58.05,60.92);
endShape()
pop()
      }


function letterR(x,y,grosor,ligar) {
        push ()
        translate(x, y)
        strokeWeight(4 + grosor);
        noFill();
        beginShape();
        beginShape();
vertex(2.5,64.09);
vertex(2.5,8.95);
bezierVertex(2.5,5.389999999999999,5.62,2.499999999999999,9.46,2.499999999999999);
vertex(44.47,2.499999999999999);
bezierVertex(52.269999999999996,2.499999999999999,58.58,8.36,58.58,15.579999999999998);
vertex(58.58,20.209999999999997);
bezierVertex(58.58,27.429999999999996,52.26,33.29,44.47,33.29);
vertex(2.5,33.29);
vertex(44.48,33.29);
bezierVertex(52.279999999999994,33.29,58.589999999999996,39.15,58.589999999999996,46.37);
vertex(58.589999999999996,64.08);
endShape()
pop()
        }


 function letterS(x,y,grosor,ligar) {
          push ()
          translate(x, y);
          strokeWeight(4 + grosor);
          noFill();
          beginShape();
          vertex(55.09+ligar,2.5);
vertex(18.04,2.5);
bezierVertex(9.45,2.5,2.5,9.5,2.5,18.14);
vertex(2.5,18.85);
bezierVertex(2.5,26.840000000000003,7.97,33.32,14.72,33.32);
vertex(42.86,33.32);
bezierVertex(49.74,33.32,55.31,39.92,55.31,48.06);
vertex(55.31,48.06);
bezierVertex(55.31,56.7,48.35,63.7,39.77,63.7);
vertex(2.72-ligar,63.7);
endShape()
pop()
         }

function letterT(x,y,grosor,ligar) {

    //inicio encapsulamiento
    push()

    //posicion
    translate(x-9,y+6);
  beginShape();
  strokeWeight(4 + grosor);
  noFill();
  vertex(42.45,-3);
  vertex(42.48,57.92);
  endShape()
  
  beginShape();
  vertex(9.48 - ligar,-3.5);
  vertex(75.48+ligar,-3.5);
  endShape()

    //final encapsulamiento
pop()
}

function letterU(x,y,grosor,ligar) {
  push ()
  translate(x, y);
  strokeWeight(4 + grosor);
  noFill();
  beginShape();
  vertex(2.97,2.3);
  bezierVertex(2.97,2.3,2.74,35.25,2.5100000000000002,44.690000000000005);
  bezierVertex(2.41,48.760000000000005,3.24,52.800000000000004,5.48,56.09);
  bezierVertex(7.0200000000000005,58.36000000000001,9.02,60.27,11.27,61.620000000000005);
  bezierVertex(13.69,63.080000000000005,16.21,63.49,18.91,63.82000000000001);
  bezierVertex(22.4,64.25000000000001,25.93,64.38000000000001,29.439999999999998,64.35000000000001);
  bezierVertex(32.25,64.33000000000001,35.059999999999995,64.2,37.849999999999994,63.88000000000001);
  bezierVertex(42.239999999999995,63.39000000000001,46.21999999999999,62.08000000000001,49.599999999999994,58.76000000000001);
  bezierVertex(52.279999999999994,56.12000000000001,54.05,52.670000000000016,54.60999999999999,48.73000000000001);
  bezierVertex(54.79999999999999,47.39000000000001,54.85999999999999,46.03000000000001,54.81999999999999,44.680000000000014);
  bezierVertex(54.589999999999996,35.240000000000016,54.35999999999999,0.010000000000012221,54.35999999999999,2.3010000000000012221);
  endShape()
  pop()
  }


  function letterV(x,y,grosor,ligar) {
    push ()
    translate(x, y)
    strokeWeight(4 + grosor);
    noFill();
    beginShape();
    vertex(60.52,0.68);
    bezierVertex(54.150000000000006,23.33,48.95,41.14,45.760000000000005,52.74);
    bezierVertex(45.21000000000001,54.74,43.870000000000005,59.63,39.68000000000001,62.56);
    bezierVertex(34.99000000000001,65.84,27.940000000000005,65.84,23.250000000000007,62.56);
    bezierVertex(19.060000000000006,59.620000000000005,17.720000000000006,54.74,17.17000000000001,52.74);
    bezierVertex(13.97,41.14,8.77,23.32,2.41,0.68);
    endShape()
    pop()
    }


function letterW(x,y,grosor,ligar) {
      push ()
      translate(x, y)
      strokeWeight(4 + grosor);
      noFill();
beginShape();
vertex(87.47,2.3);
vertex(87.47,50.2);
bezierVertex(87.47,58.82,80.41,65.92,71.82,65.92);
bezierVertex(63.22999999999999,65.92,56.169999999999995,58.82,56.169999999999995,50.2);
vertex(56.169999999999995,37.230000000000004);
bezierVertex(56.169999999999995,34.18000000000001,56.169999999999995,31.130000000000003,56.169999999999995,28.090000000000003);
bezierVertex(56.169999999999995,24.020000000000003,56.56999999999999,19.650000000000006,54.28999999999999,16.050000000000004);
bezierVertex(52.169999999999995,12.720000000000004,48.18999999999999,10.170000000000005,44.129999999999995,10.590000000000003);
bezierVertex(40.07,11.010000000000002,36.58,13.880000000000003,34.91,17.490000000000002);
bezierVertex(33.61,20.3,33.809999999999995,23.230000000000004,33.809999999999995,26.230000000000004);
vertex(33.809999999999995,50.21000000000001);
bezierVertex(33.809999999999995,58.830000000000005,26.739999999999995,65.93,18.159999999999997,65.93);
bezierVertex(9.579999999999998,65.93,2.5099999999999962,58.830000000000005,2.5099999999999962,50.21000000000001);
vertex(2.5099999999999962,2.3);
endShape()
pop()

      }

function letterX(x,y,grosor,ligar) {
        push ()
        translate(x, y)  
        strokeWeight(4 + grosor);
        noFill();
beginShape();
vertex(63.54,2.5);
bezierVertex(45.989999999999995,2.5,31.77,14.93,31.77,30.26);
vertex(31.77,36.08);
bezierVertex(31.77,51.41,45.99,63.84,63.54,63.84);
endShape()
beginShape();
vertex(0,2.5);
bezierVertex(17.55,2.5,31.77,14.93,31.77,30.26);
vertex(31.77,36.08);
bezierVertex(31.77,51.41,17.55,63.84,0,63.84);
endShape()
pop()
        }


 function letterY(x,y,grosor,ligar) {
          push ()
          translate(x, y)
          strokeWeight(4 + grosor);
          noFill();
          beginShape();
          vertex(52,14.89);
          bezierVertex(52.03,16.68,51.98,18.47,51.8,22.23);
          bezierVertex(51.279999999999994,25.43,49.599999999999994,29.98,47.059999999999995,33.46);
          bezierVertex(41.73,40.78,32.73,41.13,24.399999999999995,40.79);
          bezierVertex(19.759999999999994,40.6,14.519999999999994,40.36,10.789999999999996,37.23);
          bezierVertex(3.39,31.02,2.5,21.27,2.5,12.29);
          vertex(2.5,2.3);
          endShape()
    
          beginShape();
          vertex(52.01,2.3);
          vertex(52.01,47.36);
          bezierVertex(52.01,56.45,44.64,63.81,35.56,63.81);
          vertex(2.49-ligar,63.81);
          endShape()
          pop()

          }

function letterZ (x,y,grosor, ligar) {

      //inicio encapsulamiento
      push()

          //posicion
   translate(x, y)

  beginShape();
  strokeWeight(4 + grosor);
  noFill();
  vertex(0.25 - ligar,2.5);
  vertex(55.31,2.5);
  vertex(55.31,18.76);
  bezierVertex(55.31 ,26.700000000000003 ,49.84,33.14,43.09,33.14);
  vertex(14.95,33.14);
  bezierVertex(8.07 ,33.14,2.5,39.7,2.5,47.79);
  vertex(2.5,63.33);
  vertex(57.56 + ligar,63.33);
  endShape()
  
    //final encapsulamiento
pop()
  }

  function letterZC (x,y,grosor) {
    //inicio encapsulamiento
    push()
   translate(x,y);
   noFill();
   scale(1.2)
strokeWeight(3.5 + grosor)
noFill();
beginShape();
vertex(0,1.5);
vertex(47.5,1.5);
vertex(47.5,26.6);
vertex(4,26.6);
vertex(4,53);
vertex(47.5,53);
endShape()
  pop()

}

function letterEC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 noFill();
 scale(1.2)
strokeWeight(3.5 + grosor)  
beginShape();
vertex(47.5,1.5);
vertex(11.9,1.5);
vertex(11.9,53);
vertex(47.5,53);
endShape()
beginShape();
vertex(0,26.6);
vertex(47.5,26.6);
endShape()
pop()
}

function letterNC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x+12,y-6);
 scale(1.2);
strokeWeight(3.5 + grosor)
noFill();
beginShape();
vertex(1.5,55.6);
vertex(1.5,1.5);
vertex(23.9,1.5);
vertex(23.9,53);
vertex(47.7,53);
vertex(47.7,1.5);
endShape()
pop()

}

function letterBC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(1.5,1.5);
vertex(47.7,1.5);
quadraticVertex(47.7,1.5,47.7,1.5);
vertex(47.7,52.97);
quadraticVertex(47.7,52.97,47.7,52.97);
vertex(1.5,52.97);
quadraticVertex(1.5,52.97,1.5,52.97);
vertex(1.5,1.5);
quadraticVertex(1.5,1.5,1.5,1.5);
endShape();
beginShape();
vertex(16,27.9);
vertex(47.7,27.9);
endShape()
pop()
}

function letterAC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(6.6,55.6);
vertex(6.6,1.5);
vertex(50.2,1.5);
vertex(50.2,55.6);
endShape()
beginShape();
vertex(0,27.9);
vertex(64.7,27.9);
endShape()
pop()
}

function letterCC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(37.1,1.5);
vertex(1.5,1.5);
vertex(1.5,53);
vertex(37.1,53);
endShape()
pop()
}

function letterDC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(1.5,1.5);
vertex(38.5,1.5);
vertex(49,10.7);
vertex(49,43.7);
vertex(41.1,53);
vertex(1.5,53);
vertex(1.5,1.5);
endShape();
pop()
}

function letterFC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(10.6,53);
vertex(10.6,1.5);
vertex(46.2,1.5);
endShape()
beginShape();
vertex(0,26.6);
vertex(46.2,26.6);
endShape()
pop()
}

function letterGC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(46.4,1.5);
vertex(1.5,1.5);
vertex(1.5,53);
vertex(46.4,53);
vertex(46.4,27.9);
vertex(21.3,27.9);
endShape()
pop()
}

function letterHC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(1.5,0);
vertex(1.5,54.1);
endShape()
beginShape();
vertex(1.5,25.7);
vertex(62.2,25.7);
endShape()
beginShape();
vertex(46.4,0);
vertex(46.4,54.1);
endShape()
pop()
}

function letterJC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(39.8,0);
vertex(39.8,55.6);
vertex(0,55.6);
endShape();
pop()
}

function letterKC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape()
vertex(1.5,54.1);
vertex(1.5,0);
endShape()
beginShape();
vertex(1.5,27.1);
vertex(39.8,27.1);
vertex(45.1,21.1);
vertex(45.1,0);
endShape()
beginShape();
vertex(39.8,27.7);
vertex(45.1,33);
vertex(45.1,54.1);
endShape()
pop()
}

function letterLC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
 noFill();
strokeWeight(3.5 + grosor);
beginShape()
vertex(1.5,0);
vertex(1.5,54.1);
vertex(42.4,54.1);
endShape()
pop()
}

function letterMC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape()
vertex(1.5,55.6);
vertex(1.5,1.5);
vertex(27.9,1.5);
vertex(27.9,49);
vertex(46.4,49);
vertex(46.4,1.5);
vertex(72.8,1.5);
vertex(72.8,55.6);
endShape()
pop()
}

function letterOC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape()
vertex(1.5,1.5);
vertex(50.3,1.5);
quadraticVertex(50.3,1.5,50.3,1.5);
vertex(50.3,55.61);
quadraticVertex(50.3,55.61,50.3,55.61);
vertex(1.5,55.61);
quadraticVertex(1.5,55.61,1.5,55.61);
vertex(1.5,1.5);
quadraticVertex(1.5,1.5,1.5,1.5);
endShape();
pop()
}

function letterPC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape()
vertex(1.5,55.6);
vertex(1.5,1.5);
vertex(47.7,1.5);
vertex(47.7,29.2);
vertex(1.5,29.2);
endShape()
pop()
}

function letterQC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape()
vertex(1.5,1.5);
vertex(49,1.5);
quadraticVertex(49,1.5,49,1.5);
vertex(49,55.61);
quadraticVertex(49,55.61,49,55.61);
vertex(1.5,55.61);
quadraticVertex(1.5,55.61,1.5,55.61);
vertex(1.5,1.5);
quadraticVertex(1.5,1.5,1.5,1.5);
endShape();
beginShape();
vertex(25.3,27.9);
vertex(49,55.6);
endShape()
pop()
}

function letterSC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(49,1.5);
vertex(1.5,1.5);
vertex(1.5,27.9);
vertex(47.7,27.9);
vertex(47.7,53);
vertex(1.5,53);
endShape()
pop()
}


function letterTC(x,y,grosor,ligar) {

  //inicio encapsulamiento
  push()

  //posicion
  translate(x-9,y+6);
beginShape();
strokeWeight(4 + grosor);
noFill();
vertex(42.45,-3);
vertex(42.48,60.92);
endShape()

beginShape();
vertex(9.48 - ligar,-2.9);
vertex(75.48+ligar,-2.93);
endShape()

  //final encapsulamiento
pop()
}

function letterUC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(1.5,0);
vertex(1.5,54.1);
vertex(45.1,54.1);
vertex(45.1,0);
endShape()
pop()
}

function letterVC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(1.4,0.5);
vertex(22.5,54.7);
vertex(30.4,54.7);
vertex(51.6,0.5);
endShape()
pop()
}

function letterWC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(1.5,0);
vertex(1.5,54.1);
vertex(27.9,54.1);
vertex(27.9,6.6);
vertex(46.4,6.6);
vertex(46.4,54.1);
vertex(72.8,54.1);
vertex(72.8,0);
endShape()
pop()
}

function letterXC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(1.1,2.4);
vertex(54.5,55.8);
endShape()
beginShape();
vertex(1.1,53.9);
vertex(53.9,1.1);
endShape()
pop()
}

function letterYC (x,y,grosor) {
  //inicio encapsulamiento
  push()
 translate(x,y);
 scale(1.2);
strokeWeight(3.5 + grosor);
noFill();
beginShape();
vertex(1.5,0);
vertex(1.5,33);
vertex(42.4,33);
vertex(42.4,52.8);
vertex(1.5,52.8);
endShape()
beginShape();
vertex(42.4,33);
vertex(42.4,0);
endShape()
pop()
}