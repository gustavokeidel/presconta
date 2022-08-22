const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const Registration = require('./models/Registration');
const mongoose = 

//Config
//body-parser

app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())
//template engine

app.engine('handlebars', handlebars.engine({defaultLayout: 'main',  
          runtimeOptions: {
              allowProtoPropertiesByDefault: true,
              allowProtoMethodsByDefault: true}}));

app.set('view engine', 'handlebars')
//app.use(express.static(path.join(__dirname,'/public')));


//rotas

app.get('/', function(req,res){
  res.render('registration');
})

app.post('/add', function(req,res){
  Registration.create({
    name: req.body.name,
    rn: req.body.rn,
    email: req.body.email,
    date: req.body.date,
    pass: req.body.pass,
    confirmpass: req.body.confirmpass,
    term: req.body.term,    
    }).then(function(){
      res.redirect('/home')
        }).catch(function(erro){
          res.send("Error: "+ erro)
          })
});
  
app.get('/home', function(req, res){
    Registration.findAll().then(function(registration){
      console.log(registration)
      res.render('home', {registry: registration})
   
    })
  })
      
app.get('/delete/:id', function(req, res){
    Registration.destroy({where: {'id': req.params.id}}).then(function(){
      res.redirect('/home')
        }).catch(function(erro){
          res.send("Erro")
      })
})

app.listen(8081, function(){
    console.log('Servidor Rodando!');
  })