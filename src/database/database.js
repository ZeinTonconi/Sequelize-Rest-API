import Sequelize from 'sequelize'

export const sequelize = new Sequelize('sequelizeDB', 'root', 'charmander1', {
    host: "localhost",
    dialect: 'mysql'
})