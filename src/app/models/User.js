const mongoose = require('../../database');
const bcrypt = require('bcryptjs');
const dateFormat = require('dateformat');

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true, 
        lowercase: true 
    },
    password: {
        type: String, 
        required: true,
        select: false,
    },
    createdAt: {
        type: Date, 
        default: dateFormat(new Date, "yyyy-mm-dd HH:MM:ss"),
    },
});

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;