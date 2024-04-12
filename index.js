const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const userRoutes = require('./routes/userRoutes');


require('dotenv').config();
require('./db');
const PORT = process.env.PORT; 



app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'Task Manager API is working'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})