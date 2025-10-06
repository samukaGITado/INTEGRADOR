import { Router } from "express";
import { criarUsuario } from "./usuariosController.js";

const router = Router()

router.post("/", criarUsuario)

export default router