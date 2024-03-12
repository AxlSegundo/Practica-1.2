// jugos y sus tiempos
function jugos(nombre){
    switch (nombre) {
        case "Pure Strawberry Joy":
            return 30;
        case "Energizer":
            return 90;
        case "Green garden":
            return 90;
        case "Tropical island":
            return 180;
        case "All or nothing":
            return 300;
        case "Especiales":
            return 150;
        default:
            break;
    }
}

let menu_jugos = ["Pure Strawberry Joy","Energizer","Green garden","Tropical island","All or nothing","Especiales"];
let lista = 10;
let tiempo = 0;
let mjugo;
for (let i=0;i<lista;i++){
    mjugo = jugos(menu_jugos[Math.floor(Math.random()*6)]);
    tiempo += mjugo;
}
console.log(tiempo);//pruebas de que si funciona xd
tiempo = tiempo/60;//dividir entre 60 para obtener en minutos
console.log(tiempo);//prueba de que si funciona otra vez xd