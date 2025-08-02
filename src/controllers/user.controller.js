const UserModel = require('../models/user.model')

exports.createUser = async (req, res) => {
try {

    await UserModel.create(req.body);

    return res.status(201).json({
        message: 'User created successfully'
    })
    
} catch (error) {
    return res.status(500).json({
        message: error.message
    })
}
    
}

exports.getAllUsers = async (req, res) => {
    try {

        const users = await UserModel.findAndCountAll();

        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
} 

exports.getUserById = async (req, res) => {
    try {

        const user = await UserModel.findByPk(req.params.id);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {

        await UserModel.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json({
            message: 'User deleted successfully'
        })
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
exports.updateUser = async (req, res) => {
    try {

        await UserModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json({
            message: 'User updated successfully'
        })
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}