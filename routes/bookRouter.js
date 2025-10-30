const {Router} = require('express');
const bookRouter = Router()




bookRouter.get('/:bookId/reserve', (req, res) => {
    const { bookId } = req.params;

    res.send(`Book ID reserve ${bookId}`);
});

bookRouter.post('/:bookId/reserve', (req, res) => {
    const { bookId } = req.params;
    res.send(`Reserving bookID: ${bookId}`);
});

bookRouter.get('/', (req, res) => {
    res.send('Books Router');
});


bookRouter.get('/:bookId', (req, res) => {
    const { bookId } = req.params;
    console.log(`Book Id: ${bookId}`);
    res.send(`BookID: ${bookId}`);
});


module.exports = bookRouter;

