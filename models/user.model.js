const {DataTypes} = require('sequelize');
// const sequelize = require('../config/database');
// const sequelize = require('../config/database');
module.exports = (sequelize) =>{
    const User = sequelize.define('User',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false
        },
        phone:{
            type: DataTypes.STRING,
            allowNull:false
        }
    });
    return User;
}

