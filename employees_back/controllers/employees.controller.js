const Employees = require('../models/employees.model')
const response = { msg: '', success: false }

exports.find = async (req, res) => {
    const employees = await Employees.find()
    res.json(employees)
}

exports.findOne = async (req, res) => {
    const employee = await Employees.findOne({ _id: req.params.id })
    res.json(employee)
}

exports.create = async (req, res) => {
    const { name, surname_P,surname_M, phone, email, address } = req.body;
    const employee = new Employees({ name, surname_P,surname_M, phone, email, address });
    await employee.save().then(() => {
        response.success = true
        response.msg = 'El empleado se guardo correctamente'
        console.log(response.msg)
    }).catch(err => {
        response.success = false
        response.msg = 'Error al guardar el empleado'
        console.error(err)
    });
    res.json(response)
}

exports.update = async (req, res) => {
    const { name, surname_P,surname_M, phone, email, address } = req.body;
    const employee = { name, surname_P,surname_M, phone, email, address }
    await Employees.findByIdAndUpdate(req.params.id, { $set: employee }).then(()=>{
        response.success = true
        response.msg = 'El empleado se modifico correctamente'
        console.log(response.msg)
    }).catch(err => {
        response.success = false
        response.msg = 'Error al modificar el empleado'
        console.error(err)
    })
    res.json(response)
}

exports.remove = async (req, res) => {
    await Employees.findByIdAndRemove({ _id: req.params.id }).then(() => {
        response.success = true
        response.msg = 'El empleado se elimino correctamente'
        console.log(response.msg)
    }).catch(err => {
        response.success = false
        response.msg = 'Error al eliminar el empleado'
        console.error(err)
    })
    res.json(response)
}