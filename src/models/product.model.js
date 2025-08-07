import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const ProductModel = sequelize.define('products', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    description: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default ProductModel
