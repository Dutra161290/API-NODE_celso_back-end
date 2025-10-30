import express from "express"

const app = express()

const users = []
app.use(express.json())  //fala que a aplicacao vai trbalhar com linguagem json

app.listen(3000,() => console.log('Servidor Rodando'))

app.get('/usuarios',(req,res)=>{


    res.json(users)
})

app.post('/usuarios',(req,res) => {
   users.push(req.body)
   res.json(req.body)
})