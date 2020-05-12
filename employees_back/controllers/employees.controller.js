const employees = require('../models/employees.model')
const response = {
    msg: '',
    success: false
}

exports.create = function(req, res) {
    let { body } = req
    let employee = new employees({
        name: body.name,
        surname_P: body.surname_M,
        surname_M: body.surname_M,
        phone: body.phone,
        email: body.email,
        address: body.address
    })

    employee.save(function(err) {
        if(err) {
            console.error(err)
            response.success = false
            response.msg = 'Error al guardar el empleado'
            res.json(response)
            return
        }
        response.success = true
        response.msg = 'El empleado se guardo correctamente'
        res.json(response)
    })
}

exports.find = function(req, res) {
    employees.find(function(error, data) {
        res.json(data)
    })
}

exports.findOne = function(req, res) {
    employees.findOne({ _id: req.params.id }, function(error, data) {
        res.json(data)
    })
}

exports.update = function(req, res) {
    let { body } = req
    let employee = {
        name: body.name,
        surname_P: body.surname_M,
        surname_M: body.surname_M,
        phone: body.phone,
        email: body.email,
        address: body.address
    }
    console.log(employee)
    employees.findByIdAndUpdate( req.params.id, { $set: employee }, function(err) {
        if(err) {
            console.error(err)
            response.success = false
            response.msg = 'Error al modificar el empleado'
            res.json(response)
            return
        }
        response.success = true
        response.msg = 'El empleado se modifico correctamente'
        res.json(response)
    })
}

exports.remove = function(req, res) {
    employees.findByIdAndRemove({ _id: req.params.id }, function(err) {
        if(err) {
            console.error(err)
            response.success = false
            response.msg = 'Error al eliminar el empleado'
            res.json(response)
            return
        }
        response.success = true
        response.msg = 'El empleado se elimino correctamente'
        res.json(response)
    })
}