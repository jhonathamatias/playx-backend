const parsers = require('playlist-parser');
const M3U = parsers.M3U;
const path = require('path');

const fs = require('fs');

const playlist = M3U.parse(fs.readFileSync(path.resolve(__dirname, '../list.m3u'), { encoding: "utf8" }));

const express = require('express');

const router = express.Router();

router.get('/m3u', async (request, response) => {
    return response.send(playlist);
});

module.exports = app => app.use('/play', router);