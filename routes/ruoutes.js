import express from 'express';

export let routes = express.Router()

//servicio agregar
routes.post('/api/v1/habitaciones/',(req, res) => {
    res.send("JAJAJAJAJAJAJAJAJAJAJ")
})

//servicio buscar 

routes.get('/api/v1/habitaciones/',(req, res) => {
    res.send("JAJAJAJAJAJAJAJAJAJAJ")
})