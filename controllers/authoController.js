const db = require('../db');
const CustomNotFoundError = require('../errors/CustomNotFoundError');
const {getAllUsernames, insertUsername} = require('../db/queries');

async function getAuthorById(req, res) {
    console.log("inside getAuthorByID");
    const { authorID } = req.params;

 
    // const author = await db.getAuthorById(Number(authorID));

    // if (!author) {
    //     throw new CustomNotFoundError;
    // }

    const usernames = await getAllUsernames();
    console.log(usernames); // ✅ will now log actual rows

    res.send(`Author name : ${authorID}`);
 
};

module.exports = { getAuthorById };