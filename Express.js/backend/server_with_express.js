const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors({
}))
app.use(express.json())

const todos = []

app.get('/', (req, res) => {
    res.send('home route hit')
})
app.delete('/todos', (req, res) => {
    console.log(req.body);

    res.json(req.body)
})
app.get('/todos', (req, res) => {
    console.log(req.body);

    res.send('home route hit')
})
app.post('/todos', (req, res) => {
    console.log(req.body);


    res.json(req.body)

})


app.listen(5000, () => {
    console.log('server is running');

})