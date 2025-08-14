import {createFolder, deleteFolder} from '../controllers/manage.folder.controller.js'

export default (app) => {
    app.post('/create-folder', createFolder);
    app.delete('/delete-folder', deleteFolder);
}
