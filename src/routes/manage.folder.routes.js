import {createFolder, deleteFolder, getAllFolders, updateFolder} from '../controllers/manage.folder.controller.js'

export default (app) => {
    app.post('/create-folder', createFolder);
    app.delete('/delete-folder', deleteFolder);
    app.get('/get-all-folders', getAllFolders);
    app.put('/update-folder', updateFolder);
    // app.get('/get-folder-by-id/:id', getFolderById);
}
