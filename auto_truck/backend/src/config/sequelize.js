import { Sequelize } from "sequelize"

export const conn = new Sequelize({
    dialect: "sqlite",
    storage: "./autoTruck.sqlite"
})