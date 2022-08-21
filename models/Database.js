const Sequelize = require('sequelize')

const sequelize = new Sequelize('presconta', 'root', 'gk@251054',{
    host: "localhost",  
    dialect: 'mysql'
  })

  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}