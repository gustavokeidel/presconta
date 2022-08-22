const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const Registration = require('./models/Registration');
const mongoose = require('mongoose')
const admin =require("./routes/admin")
const session = require('express-session')
const flash = require('connect-flash')

//Config
//Session
  app.use(session({
    secret: "prescont",
    resave: true,
    saveUninitialized: true
  }))
  app.use(flash())

//Middleware
  app.use((req, res, next) => {
    res.locals.success_msg  = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    next()
  })

//mongoose
  mongoose.Promise = global.Promise;
  mongoose.connect("mongodb://localhost/dbpresconta", {
    }).then(() => {
      console.log("Mongo COnectado")
        }).catch((err)=>{
          console.log("Erro"+ err)
    })

//body-parser

  app.use(bodyParser.urlencoded({extend: false}))
  app.use(bodyParser.json())

//template engine

  app.engine('handlebars', handlebars.engine({defaultLayout: 'main',  
          runtimeOptions: {
              allowProtoPropertiesByDefault: true,
              allowProtoMethodsByDefault: true}}
  ));

  app.set('view engine', 'handlebars')  

//public

  app.use(express.static((__dirname,"public")))

//rotas

  app.use('/', admin)

  app.use('/add', admin)
  
  app.use('/login', admin)
  
  app.use('/admin/home', admin)
  const PORT = 8081
    app.listen(PORT, function(){
      console.log('Servidor Rodando!');
    })
