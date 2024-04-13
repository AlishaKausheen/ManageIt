const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Task routes are working');
})

//CRUD Operation for authenticated users


module.exports = router;