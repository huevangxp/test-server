const controller = require('../controllers/user.controller')

module.exports = (app) => {
    app.post('/create-user', controller.createUser);
    app.get('/get-all-users' , controller.getAllUsers)
    app.get('/get-user-by-id/:id' , controller.getUserById)
    app.delete('/delete-user/:id' , controller.deleteUser)
    app.put('/update-user/:id' , controller.updateUser)
}