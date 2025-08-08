import { DataTypes } from "sequelize";
import sequelize  from "../configs/db.js";

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