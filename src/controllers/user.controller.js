import UserModel from '../models/user.model.js'

export const createUser = async (req, res) => {
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

export const getAllUsers = async (req, res) => {
    try {

        const users = await UserModel.findAndCountAll();

        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
} 

export const getUserById = async (req, res) => {
    try {

        const user = await UserModel.findByPk(req.params.id);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deleteUser = async (req, res) => {
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
export const updateUser = async (req, res) => {
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
