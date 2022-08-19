const db = require('./Database')

const Registration = db.sequelize('presconta',{
    name: {
    type: db.Sequelize.STRING
    },
    id: {
    type: db.Sequelize.INT  
    },
    email: {
    type: db.Sequelize.STRING
    },
    Date: {
    type: db.Sequelize.DATE
    },
    pass: {
    type: db.Sequelize.INT
    },
    confirmpass: {
    type: db.Sequelize.INT
    },
    term: {
    type: db.Sequelize.TINYINT(1)
    },
    
})

Post.sync({force: true})