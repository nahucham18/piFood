const { Router } = require("express");

const recipeRouter = Router();

recipeRouter.get("/",(req,res)=>{
    res.send(`Esta ruta obtiene el detalle de una receta específica. Es decir que devuelve un objeto con la información pedida en el detalle de una receta.
    La receta es recibida por parámetro (ID).
    Tiene que incluir los datos de los tipos de dietas asociados a la receta.
    Debe funcionar tanto para las recetas de la API como para las de la base de datos.`)
})

module.exports = recipeRouter;