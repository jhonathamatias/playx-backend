const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/all', async (request, response) => {
    const users = await User.find();

    return response.status(200).send(users);
});

router.get('/:id', async (request, response) => {
    const { id } = request.params;

    const user = await User.findOne({ _id: id });

    return response.status(200).send(user);
});

module.exports = app => app.use('/user', router);