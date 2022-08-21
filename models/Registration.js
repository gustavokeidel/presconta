const db = require('./Database')
const Registration = db.sequelize.define('presconta',{
    name: {
    type: db.Sequelize.STRING
    },
    rn: {
    type: db.Sequelize.STRING
    },
    email: {
    type: db.Sequelize.STRING
    },
    Date: {
    type: db.Sequelize.DATE
    },
    pass: {
    type: db.Sequelize.STRING
    },
    confirmpass: {
    type: db.Sequelize.STRING
    },
    term: {
    type: db.Sequelize.TEXT
    }  
})
module.exports = Registration


//Registration.sync({force: true})