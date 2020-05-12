const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]  //authorization: Bearer <token>
        const decoded = jwt.verify(token, '__secret__')
        req.user = decoded
        next()
    } catch {
        res.status(401) //HTTP Error 401 unauthorized
        res.json({ code: 4,  msg: 'no tienes permiso para acceder' }) //numero de error custom
    }
}

module.exports = auth