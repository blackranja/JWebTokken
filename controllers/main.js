//check usernam,password in post(login) request
const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');
const login = async (req, res) => {
    const { username, password } = req.body

    //mongoose validations
    //JOI
    //check in the controller

    if (!username || !password) {
        throw new CustomAPIError('please provide email and password', 400);

    }
    const id = new Date().getDate();
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })


    console.log(username, password);
    res.status(200).json({ msg: 'user Created', token })
}
const dashboard = async (req, res) => {
    const luckNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        msg: `Hello John Doe`,
        secret: `Here is your authorized data, your lucky number is ${luckNumber}`

    })
}
module.exports = {
    login,
    dashboard
}