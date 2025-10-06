import express, { request, response } from "express"
import cors from "cors"
import { conn } from "./config/sequelize.js"
import { errorHandler } from "./middlewares/errorHandler.js"

//Tabelas
import { usuariosModel } from "./feature/usuarios/usuariosModel.js"
//Rotas
import usuariosRoutes from "./feature/usuarios/usuariosRoutes.js"

const app = express()

conn.sync()

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

//Usando as rotas
app.use("/api/usuarios", usuariosRoutes)

app.use((request, response) => {
    response.status(404).json({
        mensagem: "Rota não existe!"
    })
})

app.use(errorHandler)

export default app