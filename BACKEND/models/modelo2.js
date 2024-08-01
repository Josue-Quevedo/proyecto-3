import {Schema, model} from "mongoose"

//Esquema
const esquema = new Schema({
    direccion:{
        type: String
    }, 
    numero_casa:{
        type: Number
    }
})

//Modelo
export const modelo = new model("Direcciones", esquema)
