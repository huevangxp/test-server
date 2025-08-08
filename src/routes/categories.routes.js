import {createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory} from '../controllers/categories.controller.js'

export default (app) => {
    app.post('/add-category', createCategory);
    app.get('/get-all-categories' , getAllCategories)
    app.get('/get-category-by-id/:id' , getCategoryById)
    app.delete('/delete-category/:id' , deleteCategory)
    app.put('/update-category/:id' , updateCategory)
}
