import {Schema, model} from "mongoose"

//Esquema
const esquema = new Schema({
    name:{
        type: String
    }, 
    age:{
        type:Number
    }
})

//Modelo
export const modelo = new model("Clientes", esquema)
