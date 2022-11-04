//OPERADOR LOGICO AND
//SI QUEREMOS IDENTIFICAR LOS JOVENES ADULTOS PARA PRESTAR EL SERVICIO MILITAR, DEBEMOS ENTENDER QUE
//LOS JOVENES ADULTOS ESTAN ENTRE LA EDAD IGUAL O MAYOR A 18 AÑOS O IGUAL O MENOR A 25 AÑOS


let edad = 14;

if (edad >= 18 && edad <= 25){
    console.log("Eres un joven adulto, y puedes prestar el servicio militar");
}
else
{
    console.log("Eres un adulto o un niño, por lo tanto no puedes prestar el servicio militar");
}

//OPERADOR LOGICO OR
//SI QUEREMOS IDENTIFICAR A ASPIRANTES A ENFERMERO(A) EN LA CLINICA MAJESTIC.
//LA CONDICION ES QUE SEAN MUJERES DE 31 A 40 AÑOS.
//O HOMBRES DE 20 A 30 AÑOS

let edad1 = 35;
let sexo = "M";

if((edad1 >= 20 && edad1 <= 30 && sexo == "M") || (edad1 >= 31 && edad1 <= 40 && sexo == "F")){
    console.log("Cumples con los requizitos para la vacante de enfermeria");
}
else{
    console.log("Lo siento no puedes aplicar a la vacante");
}