const express = require('express');
const User = require('../models/User');

const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('User routes are working');
});


router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send({ user, message: "User created successfully" });
  }
  catch(err) {
    res.status(400).send({ error: err });
  }
});

router.post('/login', async (req, res)=>{})
//register a user
//login a user

module.exports = router;