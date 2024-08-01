import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {test} from "./BACKEND/controlers/cliente1.js"
import {test} from "./BACKEND/controlers/cliente2.js"
import {test} from "./BACKEND/controlers/cliente3.js"
import {test} from "./BACKEND/controlers/cliente4.js"
import {test} from "./BACKEND/controlers/cliente5.js"

//Leer librerias de dotenv
dotenv.config();

mongoose.connect(process.env.url_DB)

//Funcion promesa
.then(()=>{
    console.log("Jala conect")
})
.catch((err)=>{
    console.log("No jala el conect :c", error)
})

//Sevidor local
const app = express();
app.use(cors());

//funcion para escuchar servidor
app.listen(4001, ()=>{
    console.log("jala el server")
})

test()