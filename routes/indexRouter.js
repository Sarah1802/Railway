const { Router } = require('express');
const indexRouter = Router();

indexRouter.get('/about', (req, res) => {
    res.send('About page');
});

indexRouter.get('/contact', (req, res) => {
    res.send('Contact page');
});

indexRouter.post('/contact', (req, res) => {
    res.send('POST contatct page');
});

module.exports = indexRouter;

