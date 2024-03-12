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
function punto_uno(){
    let menu_jugos = ["Pure Strawberry Joy","Energizer","Green garden","Tropical island","All or nothing","Especiales"];
    let lista = 10;
    let tiempo = 0;
    let mjugo;
    let seg;
    for (let i=0;i<lista;i++){
        mjugo = jugos(menu_jugos[Math.floor(Math.random()*6)]);
        tiempo += mjugo;
    }
    if (tiempo%60 != 0){
        seg = tiempo%60;
        tiempo = (tiempo-seg)/60;
        console.log("El tiempo para estos jugos es", tiempo, "minutos y", seg, "segundos");
    }else{
        tiempo = tiempo/60;
        console.log("El tiempo para estos jugos es", tiempo, "minutos");
    }
}
punto_uno();
