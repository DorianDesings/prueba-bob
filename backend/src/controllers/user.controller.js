const User = require('../models/user.model')

const controller = {}

controller.index = async (req, res, next) => {
    try {
        const allUsers = await User.find()
        res.json({ allUsers })
    } catch (err) {
        next(new Error(err))
    }
}

controller.getUserByID = async (req, res, next) => {
    try {
        console.log(req.params)
        const user = await User.findById(req.params.id)
        res.json({
            user
        })
    } catch (err) {
        next(new Error(err))
    }
}

controller.addUser = async (req, res, next) => {
    try {
        const { name, bags } = req.body
        const newUser = new User({ name, bags })
        await newUser.save()
        res.json({ status: 'User saved' })
        console.log(newUser)
    } catch (err) {
        next(new Error(err))
    }
}

controller.updateUser = async (req, res, next) => {
    try {
        const { user, bags } = req.body
        const newUser = new User({ user, bags })
        await newUser.findByIdAndUpdate(req.params.id, newUser)
        res.json({ status: 'User updated' })
    } catch (error) {
        next(new Error(err))
    }
}

controller.deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({ status: 'User deleted' })
    } catch (error) {
        next(new Error(err))
    }
}

module.exports = controller