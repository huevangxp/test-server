import CategoresModel from "../models/categores.model.js"

export const createCategory = async (req, res) => {
    try {
        const { name, image } = req.body;

        if (!name || !image) {
            return res.status(400).json({
                success: false,
                error: 'Name and image are required'
            });
        }
// parse name to json
        const nameJson = JSON.parse(name);
        const category = await CategoresModel.create({ nameJson, image });

        return res.status(201).json({
            success: true,
            category
        });
    } catch (error) {
        console.error('Error creating category:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to create category',
            message: error.message
        });
    }
}

export const getAllCategories = async (req, res) => {
    try {
        const categories = await CategoresModel.findAll();

        const lang = req.query.lang || 'en';

        const filterData = categories.map((category) => {
            return {
                id: category.id,
                name: category.name[lang],
                image: category.image
            }
        })

        return res.status(200).json({
            success: true,
            data: filterData
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Failed to fetch categories',
            message: error.message
        });
    }
}

export const getCategoryById = async (req, res) => {
    try {
        const category = await CategoresModel.findByPk(req.params.id);

        const lang = req.query.lang || 'en';

        const filterData = {
            id: category.id,
            name: category.name[lang],
            image: category.image
        }

        return res.status(200).json({
            success: true,
            data: filterData
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Failed to fetch category',
            message: error.message
        });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const category = await CategoresModel.findByPk(req.params.id);

        const lang = req.query.lang || 'en';

        const filterData = {
            id: category.id,
            name: category.name[lang],
            image: category.image
        }

        return res.status(200).json({
            success: true,
            data: filterData
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Failed to fetch category',
            message: error.message
        });
    }
}


