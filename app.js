const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars')



//Config
  //template engine

  app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')
  //app.use(express.static(path.join(__dirname, '/public')));

  //body-parser

  app.use(bodyParser.urlencoded({extend: false}))
  app.use(bodyParser.json())

  
  //rotas
  
  app.get('/', function(req,res){
  res.render('registration');
})

  
  app.post('/add', function(req,res){
    res.render('add')
    res.send('Name: '+req.body.name+' <br>Id: '+ req.body.id+'<br> E-mail: '+ req.body.email+'<br> Birth Date: '+ req.body.date+'<br> Password: '+ req.body.pass+'<br> Confirm Password: '+ req.body.confirmpass)

})

app.listen(8081, function(){console.log('Servidor Rodando!');})