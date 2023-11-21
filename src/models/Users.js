const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID, //gfgf6-5f67gf-gfewe-wew567
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, // UUIDV4: es el algoritmo que genera el UUID    
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { timestamps: false })
};
