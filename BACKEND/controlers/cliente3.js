import {modelo} from "../models/modelo2.js"
export const test = () =>{
    console.log("SI funciona el controlador y el proyecto")
}
//Crear la tabla de valores
modelo.create({
    direccion: "serengueti",
    numero_casa: 520
})