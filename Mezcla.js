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
    let jugo_actual;
    console.log("jugos a realizar: ");
    for (let i=0;i<lista;i++){
        jugo_actual = menu_jugos[Math.floor(Math.random()*6)];
        console.log(jugo_actual);
        mjugo = jugos(jugo_actual);
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
// Suministro de rodajas
function rodajas(necesarias,limas){
    let lima_Ac;
    let rod_ac=0;
    let i = 0;
    while (rod_ac<necesarias){
        lima_Ac = limas[i];
        if(lima_Ac === "p"){
            rod_ac += 6;
        }
        if(lima_Ac === "m"){
            rod_ac += 8;
        }
        if(lima_Ac === "g"){
            rod_ac += 10;
        }
        i += 1;
    }
    return rod_ac;
}
function punto_dos(){
    let limas = ["p","m","g"];
    let rodajas_n = 30;
    let caja = 10;
    let lm;
    let suministros = [];
    let sobrantes;
    for (let i=0;i<caja;i++){
        lm = limas[Math.floor(Math.random()*3)];
        suministros.push(lm);
    }
    cantidad = rodajas(rodajas_n,suministros);
    console.log("Limas en la caja", suministros);
    if (cantidad > rodajas_n){
        sobrantes = cantidad%rodajas_n;
        cantidad = cantidad-sobrantes;   
        console.log("Para conseguir", rodajas_n, "rodajas se necesitan", cantidad, "limas y sobran", sobrantes, "rodajas");
    } else{
        console.log("Para conseguir", rodajas_n, "rodajas se necesitan", cantidad, "limas");
    }    
}
punto_dos()
// Jugos y fin de turno
function fin_tiempo(){

}
function punto_tres(){

}

function punto_tres(){
    let tiempo_restantes=20;
    tiempo_restantes*=60;
    console.log(tiempo_restantes);
    let menu_jugos =["Pure Strawberry Joy","Energizer","Green garden","Tropical island","All or nothing","Especiales"];
    let tiempo =0;
    let jugos_pen=15;
    let mjugo;
    let jugo_actual;
    let juegos_a_tiempo=[];
    let total_jugos=[];
    console.log("jugos pendientes");
    let br=0;
    for (let i=0; i<=jugos_pen;i++){
        jugo_actual=menu_jugos[math.floor(math.random()*6)];
        total_jugos.push(jugo_actual);
    }
    console.log(total_jugos);
    jugo_actual=null;
    while(br === 0){
        jugo_actual=total_jugos.shift();
        mjugo=jugos(jugo_actual);
        tiempo +=mjugo;
        if (tiempo<=tiempo_restantes){
            juegos_a_tiempo.push(jugo_actual);
        }else{
            br=1;
        }
    }
    console.log("los jugos que se pueden realizar:", juegos_a_tiempo);
    console.log("jugos que hace el chaln:", total_jugos);
}
punto_tres();
//hola