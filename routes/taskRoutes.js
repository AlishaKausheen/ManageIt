const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Task routes are working');
})

//CRUD Operation
module.exports = router;