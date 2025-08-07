import {createUser, getAllUsers, getUserById, updateUser, deleteUser} from '../controllers/user.controller.js'

export default (app) => {
    app.post('/create-user', createUser);
    app.get('/get-all-users' , getAllUsers)
    app.get('/get-user-by-id/:id' , getUserById)
    app.delete('/delete-user/:id' , deleteUser)
    app.put('/update-user/:id' , updateUser)
}