//Array con palabras
var palabras=["raton","gato","perro","pez","pajaro"];
//esta variable es para poner los 0
var palabra="";
//el prompt
var letraUsuario="";
var intentos=0;
//salir del bucle de comprobacion de letras
var bucle=false;
// array vacio para almacenar las palabras introducidas en el prompt
var solucion=[];
//
var acertado=false;
var letrasAcertadas=0;
var salirbucle=false;

//hacemos un random de el array palabras
var aleatorio = palabras[Math.floor(Math.random() * palabras.length)];

//asignamos el la variable aleatorio a la nueva variable adivinar
    var adivinar=aleatorio;
    console.log(adivinar);

//recorremos el array de adivinar letra a letra
    for (var i = 0; i < adivinar.length; i++) {
      adivinar[i]
      console.log(adivinar);
    }

//sustituimos las letras que tiene la palabra por 0
    for (var i = 0; i < adivinar.length; i++) {
     palabra=palabra+"0";
    }
    console.log(palabra);

    while (intentos<5 && salirbucle==false) {
      letraUsuario=prompt("Dime una letra");
      for (var i = 0; i < adivinar.length; i++) {
        //cogemos del array adivinar que se habrá generado una palabra aleatoria del Array palabras
        //y con el charAt coge solo una letra, si esa letra es la misma que hemos puesto en el prompt
        // ponemos la variable acertado en true y metemos en el array vacio solucion la letra acertada.
        if (adivinar.charAt(i)==letraUsuario) {
          acertado=true;
          solucion[i]=adivinar.charAt(i);
        }
      }
      if (acertado==false) {
        alert("Has fallado");
        intentos++;
      }else {
        alert("Has acertado");
        letrasAcertadas++;
      }
      if (letrasAcertadas==adivinar.length) {
        alert("Has ganado");
        salirbucle=true;
      }
      acertado=false;
  }
  console.log(solucion);
  console.log(palabras);

  //     //si la letra que intrdocudimos en el prompt es una letra nos avisara de que esta bien, de lo contrario estara mal.
  //     if (letraUsuario=isNaN(letraUsuario)) {
  //     alert("Esta bien, es una letra.");
  //   }else {
  //     alert("Error, Tiene que ser una letra.");
  //     //Pongo intentos -- por que al poner un numero no deberia de sumar un intento, si no volver a introducir una letra
  //     intentos--
  //   }
  //   //hacemos un bucle true para salir del while una vez tenemos lo que queremos
  //   intentos++;
  //   bucle=true;
  // }


//Cambiar las letras de la palabra por 0



var element = document.getElementById("intentos");
element.textContent="El numero de intentos son: "+intentos;
var element = document.getElementById("palabraAdivinar");
element.textContent="La palabra a adivinar era: "+adivinar;

//boleean fuera del for en false, luego en true y luego en false
