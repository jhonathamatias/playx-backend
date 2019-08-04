const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { secretToken } = require('../../config');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, secretToken, {
        expiresIn: 86400,
    });   
}

router.post( '/register', async ( request, response ) => {
    const { email } = request.body;

    try {    
        if (await User.findOne({ email })) {
            return response.status(400).send({ error: 'User already exists' });
        }

        const user = await User.create(request.body);

        user.password = undefined;

        return response.status(201).send({ 
            user,
            token: generateToken({ id: user.id }),
        });
    } catch ( err ) {
        return response.status(500).send({ 
            message: 'User register failed', 
            details: err 
        });
    }
});

router.post('/authenticate', async (request, response) => {
    const { email, password } = request.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return response.status(400).send({
            message: 'User not found'
        });
    }

    if (!await bcrypt.compare(password, user.password)) {
        return response.status(400).send({ error: 'Email or password invalid' });
    }

    user.password = undefined;

    return response.status(200).send({ 
        user, 
        token: generateToken({ id: user.id }), 
    });
});

module.exports = app => app.use('/auth', router);