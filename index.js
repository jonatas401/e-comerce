const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send('<h1>projeto<h1>')
})




app.listen(3000,'0.0.0.0', ()=>{
 console.log('sevidor rodando na porta 3000')
})