const express = require('express');
const router = express.Router();
const { login, dashboard } = require('../controllers/main');
const { BadRequestError } = require('../errors');
const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new BadRequestError('Please provide email and password');
    }
    const id = new Date().getDate();
    const token = jwt.Sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' });
    res.status(200).json({ msg: 'User Created', token })
}
const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json(
        {
            msg: `Hello,${req.user.username}`,
            secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
        })
}
module.exports = { login, dashboard };