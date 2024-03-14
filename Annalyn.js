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


  

 