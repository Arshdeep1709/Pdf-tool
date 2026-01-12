

const express = require("express")
const path = require("path")
const app = express()
const port = 2000

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'template/index.html'))
})
// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'about.html'))
// })
// app.get('/project',(req,res)=>{
//     res.sendFile(path.join(__dirname,'project.html'))
// })

app.listen(port, ()=>{
    console.log(`app starting on port ${port}`)
})