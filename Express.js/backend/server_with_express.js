const express = require('express')
const app  = express()
const cors = require('cors')
app.use(cors({
}))
app.use(express.json())

const todos = []

app.get('/', (req,res)=>{
    res.send('home route hit')
})
app.delete('/users', (req,res)=>{
    console.log(req.body);
    
    res.json(req.body)
})
app.get('/users', (req,res)=>{
    console.log(req.body);
    
    res.send('home route hit')
})
app.post('/users', (req,res)=>{
    console.log(req.body);
    
    // res.send('home route hit')

    res.json(req.body)

})


app.listen(5000, ()=>{
    console.log('server is running');
    
})