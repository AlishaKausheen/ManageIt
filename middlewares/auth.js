const jwt = require('jsonwebtoken'); // to verify the token
const User = require('../models/User');



const auth = async (req, res, next) => {
    try { 
        const token = req.header('Authorization').replace('Bearer ', '');

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({
          _id: decoded._id,  
        })

        if (!user) {
            throw new Error('Unable to login, invalid credentials');
        }

        req.user = user;// in user field add user field
        req.token = token;
        next();//whatever is their will be called 
        //first the middleware is called then task api will be called
    }
    catch (error) { 
        res.status(401).send({ error: error.message });
    }    
}

module.exports = auth;