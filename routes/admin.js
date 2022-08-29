const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
require("../models/Registration")
const Registry = mongoose.model("registration")


router.get('/', function(req,res){
  res.render('registration');
})


router.post('/add', function(req,res){

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
        res.redirect("/login")
        console.log("Salvo")
    }).catch((err) => {
        req.flash("error_msg", "No registred")
        console.log("Erro"+err)
    })
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