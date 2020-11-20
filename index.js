//importando express*****
const express = require('express');
const app = express();
//importando marko tamplate-----------------
require('marko/node-require').install();
const markoExpress = require('marko/express');
app.use(markoExpress());
//paginas estaticas ------------
app.use('/static', express.static('public'));
app.use(express.static('public'));
//cors ----------------
const cors = require('cors');
app.use(cors());

//importando o bodyparser --------------------
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res)=>{
    res.marko(require('./view/main.marko'))
})
app.get('/cadastro', (req,res)=>{
    
    res.marko(require('./view/cadastro.marko'))
    res.json({msg: ' o cors está ligado'})
})




app.listen(3001,'0.0.0.0', ()=>{
 console.log('sevidor rodando na porta 3001')
})