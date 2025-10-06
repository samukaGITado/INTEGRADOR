import { DataTypes } from "sequelize";
import { conn } from "../../config/sequelize.js";

export const usuariosModel = conn.define(
    "usuarios",
     {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        senha: {
            type: DataTypes.STRING,
            allowNull: false
        }
     },
     {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
     }
)