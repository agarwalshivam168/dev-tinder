// console.log("This is the beginning!")

const express = require("express");

const app = express();

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