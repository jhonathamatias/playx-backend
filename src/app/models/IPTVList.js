const mongoose = require('../../database');
const bcrypt = require('bcryptjs');
const dateFormat = require('dateformat');

const IPTVListSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
        required: true, 
    },
    file: {
        type: String, 
        required: true,
        select: false,
    },
    createdAt: {
        type: Date, 
        default: dateFormat(new Date, "yyyy-mm-dd HH:MM:ss"),
    },
});

const IPTVList = mongoose.model('IPTVList', IPTVListSchema);

module.exports = IPTVList;