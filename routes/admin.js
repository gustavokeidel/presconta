const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
require("../models/Registration")
const Registry = mongoose.model("registration")


router.get('/', function(req,res){
  res.render('registration');
})


router.post('/add', function(req,res){

  var erros = []

  if(!req.body.name || typeof req.body.name == undefined || req.body.name == null){
  erros.push({texto: "Invalid Name"})
}

if(!req.body.rn || typeof req.body.rn == undefined || req.body.rn == null){
  erros.push({texto: "Invalid RN"})
}

if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
  erros.push({texto: "Invalid E-mail"})
}

if(!req.body.date || typeof req.body.date == undefined || req.body.date == null){
  erros.push({texto: "Invalid date"})
}

if(erros.length > 0){
res.render("registration", {erros: erros})
} else{
  const newUser = {
    name: req.body.name,
    rn: req.body.rn,
    email: req.body.email,
    date: req.body.date,
    pass: req.body.pass,
    confirmpass: req.body.confirmpass,
    term: req.body.term,   
    dateReg: Date.now(), 
    }

  new Registry(newUser).save().then(() =>  {
        req.flash("success_msg", "User registred")
        res.redirect("/home")
        console.log("Salvo")
    }).catch((err) => {
        req.flash("error_msg", "No registred")
        console.log("Erro"+err)
    })
}

})
    //.then(function(){
    //  res.redirect('/home')
    //    }).catch(function(erro){
    //      res.send("Error: "+ erro)
    //      })

  
router.get('/login', function(req, res){
    res.render('login')
    })
        
router.get('/delete/:id', function(req, res){
    Registration.destroy({where: {'id': req.params.id}}).then(function(){
      res.redirect('/home')
        }).catch(function(erro){
          res.send("Erro")
      })
})



  module.exports = router   