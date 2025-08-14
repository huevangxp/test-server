import { DataTypes } from "sequelize";
import sequelize from "../configs/db.js";

const FolderModel = sequelize.define('folders', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default FolderModel