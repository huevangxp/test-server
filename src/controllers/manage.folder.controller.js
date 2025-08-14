import FolderModel from "../models/folder.model.js";
import fs from "fs";

export const createFolder = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        success: false,
        error: "Name is required",
      });
    }

    const folderPath = `./uploads/${name}`;
    if (fs.existsSync(folderPath)) {
      return res.status(400).json({
        success: false,
        error: "Folder already exists",
      });
    }

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }


    // check if folder name is exist in database
    const folder = await FolderModel.findOne({ where: { name } });
    if (folder) {
      return res.status(400).json({
        success: false,
        error: "Folder already exists",
      });
    }

    await FolderModel.create({ name });

    return res.status(200).json({
      success: true,
      message: "Folder created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Failed to create folder",
      message: error.message,
    });
  }
};

export const deleteFolder = async (req, res) => {
    try {

        const { name } = req.body;
        if (!name) {
            return res.status(400).json({
                success: false,
                error: "Name is required",
            });
        }

        const folderPath = `./uploads/${name}`;
        if (!fs.existsSync(folderPath)) {
            return res.status(400).json({
                success: false,
                error: "Folder does not exist",
            });
        }
        

        fs.rm(folderPath, { recursive: true }, (err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    error: "Failed to delete folder",
                    message: err.message,
                })
            }
            return res.status(200).json({
                success: true,
                message: "Folder deleted successfully",
            });
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Failed to delete folder",
            message: error.message,
        })
    }
}

export const getAllFolders = async (req, res) => {
    try {
        const folders = await FolderModel.findAll();
        return res.status(200).json(folders);
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Failed to get folders",
            message: error.message,
        })
    }
}

// udate folder name
export const updateFolder = async (req, res) => {
    try {
        const { id, name } = req.body;
        if (!id || !name) {
            return res.status(400).json({
                success: false,
                error: "Id and name are required",
            });
        }

        const folder = await FolderModel.findByPk(id);
        if (!folder) {
            return res.status(400).json({
                success: false,
                error: "Folder does not exist",
            });
        }

        folder.name = name;
        await folder.save();
        // add change name folder
        const folderPath = `./uploads/${name}`;
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        return res.status(200).json({
            success: true,
            message: "Folder updated successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Failed to update folder",
            message: error.message,
        })
    }
}
