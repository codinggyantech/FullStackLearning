const express = require("express")
const routes = express.Router();
const products = require("../controllers/productController")

// routes.get("/test",products.test)

//Products creation
routes.post("/products",products.create)
routes.get("/products",products.getAll)
routes.delete("/products",products.deleteAll)
routes.put("/products/:id",products.update)
routes.delete("/products/:id",products.delete)
routes.get("/products/:id",products.get)


 module.exports =   routes;