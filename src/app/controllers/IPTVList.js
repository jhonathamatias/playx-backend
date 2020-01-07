const express = require('express');
const IPTVList = require('../models/IPTVList');
const authMiddlewares = require('../middlewares/Auth');

const router = express.Router();

router.use(authMiddlewares);

router.post('/create', async ( request, response ) => {
    try {
        const list = await IPTVList.create(request.body);

        return response.status(201).send({ 
            list,
        });
    } catch ( err ) {
        return response.status(500).send({ 
            message: 'IPTV list create failed', 
            details: err 
        });
    }
});

router.get('/all', async (request, response) => {
    const lists = await IPTVList.find();

    return response.status(200).send(lists);
});


module.exports = app => app.use('/iptv_list', router);