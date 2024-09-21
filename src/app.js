// console.log("This is the beginning!")

const express = require("express");

const app = express();

app.use('/', (req, res) => {
    res.send('This is homepage!')
})

const PORT = "7777";
app.listen(PORT, () => {
    console.log("Server is up at PORT: " + PORT)
})