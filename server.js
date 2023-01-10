const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const data = require('./data.json')
app.use(express.static("views"))
app.use(express.urlencoded())
app.post('/form', (req, res) =>{
    console.log(req.body)
    res.redirect('/')
})
app.get('/api', (req,res)=>{
    res.json(data)
})
app.get('/about', (req,res)=>{
    res.send("To jest moja strona")
})
app.listen(port)
