'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require('./user')(sequelize);
db.Profile = require('./profile')(sequelize);
db.Community = require('./community')(sequelize);

db.User.hasOne(db.Profile, { foreignKey: 'memberId', onDelete: 'CASCADE' });
db.Profile.belongsTo(db.User, { foreignKey: 'memberId', onDelete: 'CASCADE' });

db.User.hasMany(db.Community, { foreignKey: 'userId', onDelete: 'CASCADE' });
db.Community.belongsTo(db.User, { foreignKey: 'userId', onDelete: 'CASCADE' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
