const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test', 'postgres', 'huevangxp', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: false,
    define: {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connection has been established successfully.');
        
        await sequelize.sync({ force: false }); // Sync models
        console.log('✅ All models were synchronized successfully.');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;
