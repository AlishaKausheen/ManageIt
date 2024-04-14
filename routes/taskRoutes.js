const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/test',auth, (req, res) => {
    res.json({
        message: 'Task routes are working',
        user: req.user
    })
})

//CRUD Operation for authenticated users

//create a task
router.post('/createtask', auth, async (req, res) => {
    
})

module.exports = router;