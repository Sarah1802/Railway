const express = require('express');
const app = express();
const path = require('path');
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');


// app.get('/file/:name', (req, res) => {
//     const options = {
//         root: __dirname
//     }

//     pathName = `${req.params.name}.html`;
//     res.sendFile(pathName, options);
//     // res.send(`this is the name: ${req.params.name}`);

// });

app.use('/author', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statuscode || 500).send(err.message);
})

const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log('My first express app');
})