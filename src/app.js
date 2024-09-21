// console.log("This is the beginning!")

const express = require("express");

const app = express();

// Playing with Route Handlers
app.get(
    '/route', 
    (req, res, next) => {
        console.log("Route Handler 01!");
        // res.send("RH01");
        next();
    },
    (req, res, next) => {
        console.log("Route Handler 02!");
        // res.send("RH02")
        next();
    },
    (req, res, next) => {
        console.log("Route Handler 03!");
        // res.send("RH03")
        next();
    },
    (req, res, next) => {
        console.log("Route Handler 04!");
        // res.send("RH04")
        next();
    },
    (req, res) => {
        console.log("Route Handler 05!");
        res.send("RH05")
    },
)

app.get('/user', (req, res) => {
    res.send(req.query)
})


// Dynamic routing
app.get('/user/:userId/:userName/:password', (req, res) => {
    res.send(req.params)
})

app.get('/user', (req, res) => {
    res.send(req.query)
})


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