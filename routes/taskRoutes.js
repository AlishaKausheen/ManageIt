const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const Task = require('../models/Task');

router.get('/test',auth, (req, res) => {
    res.json({
        message: 'Task routes are working',
        user: req.user
    })
})

//CRUD Operation for authenticated users

//create a task
router.post('/createtask', auth, async (req, res) => {
    try {
        //description , completed frm req.body
        //owner from req.user._id
        const task = new Task({
            ...req.body,
            owner: req.user._id
        })
        await task.save();
        res.status(201).json({ task, message: 'Task created successfully' });
    }
    catch(err) {
        res.status(400).send({ error: err });
    }
})

module.exports = router;