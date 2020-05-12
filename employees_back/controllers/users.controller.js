const users = require('../models/users.model')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    let hashedPass = crypto.createHash('SHA512').update(req.body.pass).digest('hex')
    let response = { token: null }
    await users.findOne({ user: req.body.user, pass: hashedPass }).then(data => {
        if(data !== null) {
            response.token = jwt.sign({
                id: data._id,
                user: data.user
            }, '__secret__', { expiresIn: '12h' })
        }
    }).catch(err => {
        response.token = null
        console.error(err)
    })
    res.json(response);
}