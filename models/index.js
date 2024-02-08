const dbCofig = require('../config/database');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbCofig.DB,dbCofig.USER,dbCofig.PASSWORD,{
    host: dbCofig.HOST,
    dialect: dbCofig.dialect
 }) 

 const db = {}

 db.Sequelize = sequelize;
 db.sequelize = sequelize;

 db.User = require('./user.model')(sequelize,Sequelize);
 db.Company = require('./company.model')(sequelize,Sequelize);
 
 //connect models
 db.User.hasMany(db.Company, {foreignKey:'userId'});
 db.Company.belongsTo(db.User,{foreignKey:'userId'});

 module.exports = db;