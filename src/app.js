// console.log("This is the beginning!")

const express = require("express");

const app = express();

// Advanced routing
app.get('/ab+c', (req, res) => {
    res.send('This is ab+c!')
})

app.get('/abc', (req, res) => {
    res.send('This is abc!')
})

app.get('/pq?r', (req, res) => {
    res.send('This is pq?r!')
})

app.get('/pqr', (req, res) => {
    res.send('This is pqr!')
})

app.get('/xy*za', (req, res) => {
    res.send('This is xy*za!')
})

app.get('/xyza', (req, res) => {
    res.send('This is xyza!')
})


// Normal routing
app.post('/user', (req, res) => {
    res.send('This is Dashboard!')
})

app.get('/user', (req, res) => {
    res.send({"firstName": "Shivam", "lastName": "Agarwal"})
})

app.post('/user', (req, res) => {
    res.send('This is Dashboard!')
})

app.use('/dashboard', (req, res) => {
    res.send('This is Dashboard!')
})

// app.use('/', (req, res) => {
//     res.send('This is homepage!')
// })

const PORT = "7777";
app.listen(PORT, () => {
    console.log("Server is up at PORT: " + PORT)
})