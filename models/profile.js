const { DataTypes } = require('sequelize');

const ProfileModel = (sequelize) => {
    return sequelize.define('profile', {
        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(127),
            allowNull: false,
        },
    });
};

module.exports = ProfileModel;
