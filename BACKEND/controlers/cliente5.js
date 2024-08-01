import {modelo} from "../models/modelo1.js"
export const test = () =>{
    console.log("SI funciona el controlador y el proyecto")
}
//Crear la tabla de valores
modelo.create({
    direccion: "mapocho",
    numero_casa: 510
})