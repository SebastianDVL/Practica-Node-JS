import express from 'express'
import {routes} from '../routes/ruoutes.js'
export class Server{

    constructor(){
        this.app = express()
        this.enrutarServicios()
    }

    encenderServidor(){
        this.app.listen(process.env.PORT,()=>{
            console.log(`Server opened in port ${process.env.PORT}`)
        })
    }

    enrutarServicios(){
        this.app.use('/', routes)
    }

    conectarBD(){

    }

}