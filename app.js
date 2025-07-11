alert ("¡Juguemos a adivina el número! 💡");

let nombre = prompt("Hola, ¿Cómo te llamas?");
alert (`Bienvenido ${nombre} 🫣, ¡tienes 3 oportunidades para ganar ✨!`);
alert("Elije un número del 1 al 10 😉"); //rango a elegir

//Iniciar juego
function jugar(){


//Datos para el juego
    let numeroSecreto= Math.floor(Math.random()*10+1);
    let intentos = 0;
    let maxIntentos = 3;
    let numeroJugador ;

//Bucle y desarrollo
    while(intentos<maxIntentos){
        numeroJugador = Number(prompt(`Intento ${intentos+1}/3 - Ingresa un número:`));
        
        console.log(`Intento ${intentos}, El jugador ingresó ${numeroJugador}`);

        if(numeroJugador === numeroSecreto){
            alert(`🎉 ¡Felicidades, ${nombre}! Adivinaste el número en ${intentos} intento(s) 😄`);
            console.log("El jugador GANÓ");
            break
        } else if(numeroJugador<numeroSecreto){
            alert(`📉 Muy bajo. ${nombre} intenta con un número más grande.`);
        } else {
            alert(`📈 Muy alto. ${nombre} intenta con un número más pequeño.`);
        }
        intentos++;
        
        if(intentos === maxIntentos){
            alert(`😢 Lo siento, ${nombre}. Has agotado tus intentos.`);
            console.log("El jugador PERDIÓ");
        }
        
//Bonus
    }
    let jugarNuevamente = confirm("¿Quieres jugar otra vez?");
    if (jugarNuevamente){
        jugar();
    } else {
        alert("¡Gracias por jugar! 🎮✨");
    }    
}

jugar()