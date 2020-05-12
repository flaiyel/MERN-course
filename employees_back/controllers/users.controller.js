const users = require('../models/users.model')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

exports.login = function(req, res) {
    let hashedPass = crypto.createHash('SHA512').update(req.body.pass).digest('hex')
    users.findOne({ user: req.body.user, pass: hashedPass  }, function(err,data) {
        let response = {
            token: null
        }
        if(data !== null) {
            response.token = jwt.sign({
                id: data._id,
                user: data.user
            }, '__secret__', { expiresIn: '12h' })
        }
        res.json(response);
    })
}