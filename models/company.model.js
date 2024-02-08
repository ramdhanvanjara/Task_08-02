const {DataTypes} = require('sequelize');


module.exports = (sequelize) =>{
    const Company = sequelize.define('Company',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        city:{
            type: DataTypes.STRING,
            allowNull:false
        },
    });

    return Company
}

