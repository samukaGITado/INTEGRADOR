import { usuariosModel } from "./usuariosModel.js";

export async function criarUsuario(request, response, next){
    const {nome, email, senha} = request.body

    try {
        if(!nome){
            const err = new Error("O campo nome é obrigatório")
            err.statusCode = 400
            throw err
        }

        if(!email){
            const err = new Error("O campo email é obrigatório")
            err.statusCode = 400
            throw err
        }
        if(!senha){
            const err = new Error("O campo senha é obrigatório")
            err.statusCode = 400
            throw err
        }

        await usuariosModel.create({ nome, email, senha })
        response.status(201).json({
            mensagem: "Tarefa criada"
        })
    } catch (error) {
        next(error)
    }
}