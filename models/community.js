const { DataTypes, Model } = require('sequelize');

const CommunityModel = (sequelize) => {
    return sequelize.define('community', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        imgPath: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    });
};

module.exports = CommunityModel;
