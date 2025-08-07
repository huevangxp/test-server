import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const CategoresModel = sequelize.define('categores', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default CategoresModel