// Función para simular la probabilidad de que el caballero esté dormido o despierto 
function caballeroDormido() {
    return Math.random() < 0.5;
  }

   // Función para simular la probabilidad de que el arquero esté dormido o despierto
function arqueroDormido() {
  return Math.random() < 0.5;
}
  
  // Función para simular si Annalyn tiene su perro con ella o no 
  function tienePerro() {
    return Math.random() < 0.5; 
  }
  
  // Función para simular si el prisionero está despierto o dormido 
  function prisioneroDespierto() {
    return Math.random() < 0.5; 
  }
  
  // Función para determinar las acciones disponibles en base a las condiciones
  function accionesDisponibles(caballero, arquero, prisionero, perro) {
    let acciones = [];
  
    // Ataque rápido si el caballero está dormido
    if (caballero && !arquero) {
      acciones.push("Ataque rápido");
    }
  
    // Espiar si al menos uno de ellos está despierto
    if (caballero || arquero) {
      acciones.push("Espiar");
    }
  
    // Señalar al prisionero si este está despierto y el arquero está dormido
    if (prisionero && !arquero) {
      acciones.push("Señalar al prisionero");
    }
  
    // Prisionero libre
    if ((perro && !arquero) || (!perro && prisionero && !caballero && !arquero)) {
      acciones.push("Prisionero libre");
    }
  
    return acciones;
  }
  
  // Función para realizar las acciones
  function realizarAccion(accion) {
    switch (accion) {
      case "Ataque rápido":
        return console.log("Realizando ataque rápido...");
      case "Espiar":
        return console.log("Espiando al grupo...");
      case "Señalar al prisionero":
        return console.log("Señalando al prisionero...");
      case "Prisionero libre":
        return console.log("Intentando liberar al prisionero...");
      default:
        console.log("Acción no reconocida");
    }
  }
 
   // Simulación
 let seLiberaAmiga = true; // Variable para simular si se logra liberar a la amiga o no
 while (seLiberaAmiga) {
   let caballero = caballeroDormido();
   let arquero = arqueroDormido();
   let prisionero = prisioneroDespierto();
   let perro = tienePerro();
    console.log("\nEstado de los personajes: \n");
   console.log("Caballero:", caballero);
   console.log("Arquero:", arquero);
   console.log("Prisionero:", prisionero);
   console.log("Annalyn tiene su perro:", perro);
    // Llamamos a la función accionesDisponibles con los estados actuales de los personajes
let acciones = accionesDisponibles(caballero, arquero, prisionero, perro);
// Mostramos por consola las acciones disponibles en este turno
console.log("\nAcciones disponibles:", acciones);


// Si hay al menos una acción disponible
if (acciones.length > 0) {
 // Se elige una acción aleatoria entre las disponibles
 let accion_actual = acciones[Math.floor(Math.random() * acciones.length)];
 let accionAleatoria = accion_actual;
 // Se ejecuta la acción seleccionada
 realizarAccion(accionAleatoria);
 acciones.slice(accion_actual);
 seLiberaAmiga = Math.random() < 0.5;
 if (seLiberaAmiga === true){
     console.log("Con la acción de", accionAleatoria, "no se pudo liberar al prisionero");
 }else{
     console.log("Con la acción de", accionAleatoria, "se pudo liberar al prisionero");
 }


} else {
 // Si no hay acciones disponibles, se muestra un mensaje y se termina el juego
 console.log("No hay acciones disponibles. Fin del juego.");
 seLiberaAmiga = false; // Terminamos el ciclo de liberación de la amiga
}


}
